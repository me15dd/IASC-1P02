//asking for the users age
var age = prompt("what is your age?");
var date = new Date();
var year = date.getFullYear ();
var birthYear = year - age;
document.write (birthYear);
