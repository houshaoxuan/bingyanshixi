window.onload = init();

function init(){
  var click = document.getElementsByClassName('section2');
  for (var i = 0; i < click.length; i++) {
    click[i].addEventListener('click', showmore, true);
  }
}

function showmore(event){
    var clicktarget = event.currentTarget;
    var reference = clicktarget.getElementsByClassName('message3')[0];
    if(reference.className.indexOf('expand') == -1){
    var text = "只需5美元，谷歌就可以使用你的人脸数据五年，专找流浪汉采集";
    var textnode = document.createTextNode(text);
    var newtext = document.createElement('p');
    newtext.appendChild(textnode);
    newtext.className = "intro";
  
    var img = document.createElement('img');
    img.src = "../img/d6.jpg";
    img.classList.add("behind");
//生成新的div节点
    var div = document.createElement('div');
    div.appendChild(newtext);
    div.appendChild(img);
    div.classList.add('message2','expanded');
//添加新的内容
    clicktarget.insertBefore(div,reference);
    reference.classList.add('expand');
//修改收起栏
    reference.getElementsByClassName('more')[0].innerHTML = "收起";
    reference.getElementsByClassName('underarrow')[0].src = '../img/t箭头.png';
  }
//展开状态
  else{
    reference.getElementsByClassName('more')[0].innerHTML = "余下1篇";
    reference.getElementsByClassName('underarrow')[0].src = '../img/箭头.png';
    var remove = clicktarget.getElementsByClassName('expanded')[0];
    remove.parentNode.removeChild(remove);
    reference.classList.remove('expand');
  }
}