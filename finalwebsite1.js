//Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }

  //time
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
      if (i < 10) {i = "0" + i};
      return i;
  }

//top ups
var age = prompt("What is your age?");
var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;
