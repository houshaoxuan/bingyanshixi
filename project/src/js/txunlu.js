var index = document.getElementById('aside');
str = index.innerHTML;
index.onmousemove = jump;

function jump(event){
  var array = str.split("");
  var height = index.offsetHeight;
  var y = event.offsetY;
  var char = Math.ceil(28*y/height);
  if (char == 0) {char = 1;}
  ontoclick(array[char-1]);
}

function ontoclick(char){
  if (char == '*') {window.location.hash = "#*"; }
    else if (char == '#') {window.location.hash = "#foo";}
    else{window.location.hash = "#" + char;}

}