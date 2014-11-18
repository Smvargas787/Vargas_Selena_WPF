/*
Selena Vargas
Circumference
WPF 1411
11/12/14
 */

//alert("Testing 1, 2, 3!");

 //Circumference Formula
 //C = 2(Pi)R

var radius =prompt("Let's find the circumference of a circle, what is the radius?");
 function circumference(radius) {

  var circum = 2 * Math.PI * radius;


  return circum;
 }
radius=validatePlease(radius);
var returnedCircum=circumference(radius);

console.log("The circumference is "+returnedCircum);

function validatePlease(userPrompt){
 while(userPrompt==="" || isNaN(userPrompt)){

  userPrompt=prompt("Please only use a number and please don't leave blank.")

 }
 return userPrompt;
}


//Bee Stings

var victimWeight = prompt("Let's find out how many bee stings it would take to kill animal, type in the animal's weight:");
function animal(victimWeight){

 var sting = victimWeight * 8.666666667;

 return sting;

}

victimWeight=validatePlease(victimWeight);
var returnedSting = animal(victimWeight);
console.log("The amount of bee stings it takes to kill an animal is "+returnedSting+"!");



















