/*
Selena Vargas
Movie Ticket Conditionals
WPF 1411
11/5/14
 */

//alert("Testing 1, 2, 3!");


//Movie Ticket Given

var movieTime = prompt("What is the time of your movie?");
var age = prompt("How old are you?");

//If statement

 if ((movieTime>=3 && movieTime<=5) || (age<=10 || age>=55 )) {
  console.log("Your ticket is now $7.00, enjoy your movie with your awesome discount!");

 }

 else {
   console.log("Your ticket price is $12.00. That sucks.")

}
