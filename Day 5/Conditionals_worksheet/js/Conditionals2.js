 /*
Selena Vargas
GPA Conditional
WPF 1411
11/5/14
 */

//alert("Testing 1, 2, 3!");


//Grade Letter Calculator

 var gpa = prompt("What is your current grade here at Full Sail?");

 if(gpa>=100){
  console.log("A+! We have an overachiever in the building!")

 }

 if(gpa>=94){
  console.log("A! Way to go you wise kid you!");

 } else if(gpa>=89){
  console.log("B+! You're moving on up! Keep it up!")

 } else if(gpa>=84){
  console.log("You got a B without getting stung! Good job!");


 } else if(gpa>=79){
  console.log("C+ is always still passing for me!");

 } else if(gpa>=75) {
  console.log("Prepare for a heart attack, You've managed to fail your course with a D!");

 } else if(gpa>=72){
  console.log("I would rethink your choices in life at this point. You've managed to fail your course with a F.");

 } else if(gpa>=69) {
  console.log("You just became homeless from wasting all of your money on a school that you failed in.");

 }  else{
  console.log("I would suggest studying more.");

 }