 /*
Selena Vargas
Conditionals
WPF 1411
11/5/2014
 */

//alert("Testing 1, 2, 3!");

 //Basic Conditional




 //Create a boolean variable
 var oldEnough = true;

 //If the child is old enough, console.log they can ride

 /*
 //if(condition to test){

 Code if true goes here

}

*/

 if(oldEnough){
  //True code goes here
  console.log("You are old enough to ride the ride!");

 } else {
  //False code goes here
  console.log("Sorry you are not old enough.");
 }

 console.log("After the if statement.");

//Relational Operators
 //Compares two values and returns a boolean

 //If the kid is over 45" tall, then can ride the ride

 //Create a variable to hold the kid's height
 var kidHeight = 44.9;

 //add sneaker lift
 var sneakerLift = 2;

 //Create a variable for kid min height
 var minHeight = 48;

//If your parent goes on the ride with you - 45" and over can ride
 var wParentHeight = 45;



 //If statement
 if(kidHeight > minHeight) {
  //True code goes
  console.log("Congrats, you're tall enough to ride!");

 } else if (kidHeight >= wParentHeight ){
  console.log("You can ride, but with your parent.");




 } else if(kidHeight+sneakerLift > 48){
  console.log("You can ride the ride if you wear sneaker lifts.");

 } else  {
  //False code goes here
  console.log("Sorry kid, you're too short. Try to grow.");

 }
