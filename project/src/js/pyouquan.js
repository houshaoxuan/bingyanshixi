var database = new Array();
window.onload = init();
var camera = document.getElementById('camera');
camera.onclick = jump;

function init(){
  var url = location.search;
  var content = url.split('=');
  for( var i = 1; i < content.length; i++){
    database[i-1] = judgestr(decodeURI(content[i]));
    add(database[i-1]);
  }
  var button = document.getElementsByClassName('button');
  for( var j = 0; j < button.length; j++){
    button[j].onclick = function(event){
      change(event,j-1);
    }
  }
}

//剪裁字符串
function judgestr(str){
  var len = 80;
  var tobj = {
    expand: str,
    state: true,
  }
  if(str.length*2 <= len) {
    tobj.state = true;
    return tobj;
  }
  var strlen = 0;
  var s = "";
  for(var i = 0;i < str.length; i++) {
    s = s + str.charAt(i);
    if (str.charCodeAt(i) > 128) {
      strlen = strlen + 2;
      if(strlen >= len){
        tobj.state = false;
        tobj.coll = s.substring(0,s.length-1) + "......";
        return tobj;
      }
    } else {
      strlen = strlen + 1;
      if(strlen >= len){
        tobj.state = false;
        tobj.coll = s.substring(0,s.length-2) + "......";
        return tobj;
      }
  }
  }
}

//展开收起内容
function change(event,j){
  var target = event.target;
  var newtarget = target.previousSibling;
  if (!database[j].state) {
    target.innerHTML = '收起';
    newtarget.innerHTML = database[j].expand;
    database[j].state = true;
  }else{
    target.innerHTML = '展开';
    newtarget.innerHTML = database[j].coll;
    database[j].state = false;
  }

}


//跳转界面
function jump(){
  var index = location.search.indexOf('?');
  var data = location.search.slice(data);
  window.location.href = "./fbupengyq.html" + data;
}
//增加内容
function add(tobj){
//右侧文本
  if(tobj.state == false){
    var content = tobj.coll;
  } else{
    var content = tobj.expand;
  }
  var textnode = document.createTextNode(content);
  var newtext = document.createElement('p');
  newtext.appendChild(textnode);
  newtext.className = "content";

  var namenode = document.createTextNode('薛定谔的猫');
  var newname = document.createElement('p');
  newname.appendChild(namenode);
  newname.className = "nickname";

  var timenode = document.createTextNode('刚刚');
  var newtime = document.createElement('p');
  newtime.appendChild(timenode);
  newtime.className = "time";

  var comment = document.createElement('img');
  comment.src="../img/like.png";
  comment.className = "comment";
  var like = document.createElement("img");
  like.src = "../img/comment.png";
  like.className = "like";
  var rbottom = document.createElement('span');
  rbottom.appendChild(comment);
  rbottom.appendChild(like);

  var foot = document.createElement('div');
  foot.appendChild(newtime);
  foot.appendChild(rbottom);
  foot.classList.add('bottom');

  var right = document.createElement('span');
  right.appendChild(newname);
  right.appendChild(newtext);
  if (!tobj.state) {
    var buttonnode = document.createTextNode("展开");
    var newbutton = document.createElement('p');
    newbutton.appendChild(buttonnode);
    newbutton.className = 'button';
    right.appendChild(newbutton);
  }
  right.appendChild(foot);
  right.className = 'right';
  
  var img = document.createElement('img');
  img.src = "../img/avatar.jpg";
  img.classList.add("avatar2");

  var div = document.createElement('div');
  div.appendChild(img);
  div.appendChild(right);
  div.classList.add('message');

//插入参考点
  var section = document.getElementsByTagName('section')[0];
  var reference = section.getElementsByClassName('message')[0];
  section.insertBefore(div,reference);
  }