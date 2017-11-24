//make new array
var colourArray = new Array();
colourArray = ["RED","GREEN","BLUE","YELLOW"];

var colour = "";

//a funtion to generate colour tandomly
function getColour(){



//generate a random number between 0-3
var colourNum = Math.round(Math.random()*3);

//assign our generated colour globally
colour=String(colourArray[colourNum]);

//print out the colour to the text area output
 document.getElementById('output').innerHTML = colour;

 //clear the textarea
 setTimeout(function(){document.getElementById('output').innerHTML="";},1000);
}

function pushButton(userColour){
if(colour == userColour){

document.getElementById('output').innerHTML = "CORRECT!";
setTimeout(function(){getColour();}, 1000);
}
else{
document.getElementById('output').innerHTML = "GAME OVER!";
}

}
