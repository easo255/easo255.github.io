var i = 0;
var txt = 'Edis Asotic';
var speed = 110;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("overskrift").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
