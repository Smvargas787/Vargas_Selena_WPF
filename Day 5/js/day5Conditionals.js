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
 var kidHeight = 47;

 //add sneaker lift
 var sneakerLift = 2;


 //If statement
 if(kidHeight > 48){



  //True code goes
   console.log("Congrats, you're tall enough to ride!");


 } else if(kidHeight+sneakerLift > 48){
  console.log("You can ride the ride, you cheater.");

 } else  {
  //False code goes here
  console.log("Sorry kid, you're too short. Try to grow.");

 }
