/*
Selena Vargas
Day 4 Prompts
WPF 1411
11-3-2014
 */

alert("Testing 1, 2, 3!");

//Ask user for Input

//Prompt() - ask the user to type something in
var yearBorn = prompt("Enter your year of birth:");
console.log(yearBorn);

//Figure out how old we are
var age = 2014 - yearBorn;
console.log("You are "+age+" years old.");


//Calculate the area of a rectangle
//area = length * width

var length = prompt("We are going to calculate the area of a rectangle.\nPlease enter the length of your rectangle:");

var width = prompt("Please enter the width of your rectangle:");

//Calculate the actual area
var area = length * width;

//Create a results variable and then console.log that
var results = "The area of your rectangle with a width of "+width+" and a length of "+length+" is "+area+".";

console.log(results);
alert(results);

//Console the area
console.log("The area of your rectangle with a width of "+width+" and a length of "+length+" is "+area+".");

//Alert the user with the same information
alert("The area of your rectangle with a width of "+width+" and a length of "+length+" is "+area+".");


