 /*
Selena Vargas
Conditionals Worksheet
WPF 1411
11/5/14
 */

//alert("Testing 1, 2, 3!");

//Last Chance for Gas

 var gasEfficiency =prompt("Please tell me your fuel efficiency?");
 var gaugeTank = prompt("What percent of fuel do you have?");
 var tankCapacity = prompt("How many gallons do you have?");



 var mpg = (gaugeTank/100)*tankCapacity*gasEfficiency;

//If statement
 if(mpg>=200){
  console.log("Yes, you can make it without stopping for gas! Now go faster!");


 } else {
  console.log("You better go and get some gas before you get stuck forever and ever!\n" +
  "You can only go as far "+mpg+" miles before you need more gas.");


 }
