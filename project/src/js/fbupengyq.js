var submit = document.getElementById('submit');
submit.onclick = jump;

function jump(){
  var data = location.search;
  var text = document.getElementById('text').value;
  window.location.href = "./pyouquanzs.html?" + data.slice(1) + '=' + text;

}