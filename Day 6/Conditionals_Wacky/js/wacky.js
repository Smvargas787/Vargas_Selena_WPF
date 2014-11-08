
 /*
Selena Vargas
Wacky Conditionals
WPF 1411
11/7/14
 */

//alert("Testing 1, 2, 3!");


//Spongebob Scenario

 alert("Spongebob Time!");
 alert("Mr. Krabs wants to take his daughter Pearl out on a crab and whale date. The tickets are originally $9:00 " +
 "but whales get a discount if they're a certain height because they can barely fit in the theater. Considering that Mr. Krabs " +
 "is cheap as well, he notices that if he goes during the 10:00am-12:00pm showing the discount is $1:00 instead.");


var discountHeight = 66.6;
 var pearlsHeight = prompt("What is Pearl's current height?");

 if(pearlsHeight===""){
  console.log("Please enter some valid information.");
  pearlsHeight = prompt("What is Pearl's current height?");



var discountTime = prompt("What time do you want Mr. Krabs to take his daughter out to the movies?");

 if ((pearlsHeight>=discountHeight ) && (discountTime>=10 && discountTime<=12 )) {
  console.log("You just made Mr. Krabs super happy with getting him a $1:00 ticket for Pearl!");

 }

 else {
  console.log("Mr. Krabs is now crying because he had to spend all his $9:00 in pennies for Pearl.")

 }

