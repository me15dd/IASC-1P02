//the starting time
var start = new Date ();
var startMilli = start.getTime();

function stopTime (){
	//the time when we press the button
var end = new Date();
var endMilli = end.getTime();
//substract end time from start time
var diffMilli = endMilli - startMilli;
//converted the difference to seconds
var diffsec = diffMilli/1000;
//alert the user with a group
alert ("the number of seconds is: " + diffsec)
}
