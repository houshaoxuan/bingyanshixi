window.onload=init();
function init(){
  var put = document.getElementById('put');
  put.onkeypress = handlekeypress;
}

function handlekeypress(event){
  if (event.keyCode == 13) {
    change();
  }
}

function change()
{
  var intext = document.getElementById('put').value;
  document.getElementById('put').value = '';
  var newtext = document.createTextNode(intext);
  var newgraf = document.createElement("p");
  newgraf.className = "content";
  newgraf.appendChild(newtext);

  var img = document.createElement("img");
  img.src = "../img/avatar2.jpg";
  img.className = "avatar2";

  var message2 = document.createElement('div');
  message2.classList.add("message2","mess");
  message2.appendChild(newgraf);
  message2.appendChild(img);

  var now = new Date();
  var time = now.getHours() + ':' + now.getMinutes();
  var newtime = document.createTextNode(time);
  time = document.createElement("p");
  time.className = "time";
  time.appendChild(newtime);

  var docdiv = document.getElementsByClassName('container');
  var newdocdiv = docdiv[docdiv.length-1];
  var headdiv = document.getElementsByClassName('mess')[0];
  newdocdiv.insertBefore(message2,headdiv);
  newdocdiv.insertBefore(time,headdiv);
}