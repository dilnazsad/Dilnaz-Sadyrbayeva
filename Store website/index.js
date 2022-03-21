function check() {

  var audio1 = document.getElementById("audioExcellent");
  var audio2 = document.getElementById("audioError");
  var correct="Вы успешно зарегистрировались!";
  var error="Заполните все данные";
  var passw="Пароли не совпадают";

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;


if (email==="" || password==="" || password2===""){
 document.getElementById("reg").innerHTML = error;
 audio2.play();
}
else if (password2 != password){
 document.getElementById("reg").innerHTML = passw;
 audio2.play();
}
else{
 document.getElementById("reg").innerHTML = correct;
 audio1.play();
}
}

function visibility() {
  var pass = document.getElementById("password2");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

function visibility2() {
  var pass = document.getElementById("password");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};



function mouseOver() {
  document.getElementById("demo").style.color = "#8e9aaf";
}

function mouseOut() {
  document.getElementById("demo").style.color = "black";
}

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
