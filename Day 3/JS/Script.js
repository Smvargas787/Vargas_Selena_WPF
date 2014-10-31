/**
 * Created by RicanChica on 10/31/14.
 */

//Single line comment

/*
Multi lined comment
You can make it as large as you want

*/

alert("Hello World!");

//Console Log
//Programmers to show variables and code
console.log("this is the console. Can you see it?");


//Declare a variable
//Use the keyword of var
var whatEver1; //Declaration


//Set the value of the variable
whatEver1 = 42 ; //Definition

//Storage container = value

//Setup a variable and define it in the same line
var a = 2; //Declare and Define
console.log(a);

a+3;
console.log(a);

a=a+3;
console.log(a);

//Declare a variable b
var b;

//Define the value of b
b=a+3;
console.log(a);
console.log(b);


//Simple Math
//How Old we are
//2014-year we were born

var yearBorn = 1995;

//Calculate your age
var myAge = 2014 - yearBorn

//Tell the user how old
console.log(myAge);

//Talk About MATH!!!!!

// +, -, *, /

//Find the area of a triangle
//Base * Height /2

var base = 20;
var height = 15;


var areaTriangle = base * height /2;
console.log(areaTriangle);

//Modulo - %
//Gives the remainder left over
var remainder = 32%10

console.log(remainder);

//Find out if its odd or even
// %2 - "modulo by 2"
// 1 - odd number
//0 - even number

var evenOrOdd = 67%2;
console.log(evenOrOdd);


//Assignment Operators
/*
= Assigns the value to the variable
++ Add 1 to the value of the variable
-- Subtracts 1 to the value of the variable
+= Adds the number to the value of the variable

 */



var x = 1;
x ++; //The same as X = X + 1;
x--;
x+=2; //x = x+2;
x=1; //x= x-1;
x/=2; // x = x/2;
x*8; // X = x * 8

console.log(x);

//Strings
//Text fields of programming
//MUST start and end in matching quotes
//Either ' or "

//Declare and define a string variable
var kermit = "light green";
var frogName = "kermit";

console.log(frogName);

//Why should I bother with a single or double quote
//Escape character - \ backslash in front of the character
//Multiline break \n - New Line Character

var phrase = 'I don\'t know \'n you never know';
console.log(phrase);

//Boolean
//Light switches of the programming world
//Either contains true or false

var yes = true; // A true boolean

var nope = "True"; //THIS IS NOT A BOOLEAN !!

var lightSwitch = false;

//Order of Operations
//PEMDAS - Please Excuse My Dear Aunt Sally
//Parenthesis, Exponents, Multiply, Divide, Add, Subtract

//Find Quiz Averages
var quiz1= 87;
var quiz2 = 100;
var quiz3 = 70;

//Average add up then divide by how many
var averageQuiz = (quiz1 + quiz2 + quiz3)/3;
//A rookie mistake is to WAY overuse parenthesis!

console.log(averageQuiz);

//Calculate the perimeter of a rectangle
//2 * width + 2 * length
var width = 6;
var length = 7;
var perimeterRect = (2*width) + (2*length);

console.log(perimeterRect);

//Concatenation - combine strings together

var firstName = "Kermit";
var lastName = "The Frog";

//Concatenate these two variables into one variable
var fullName = firstName+" "+lastName;

console.log(fullName);

var d = "6";
var e = "7";
var combine = d + e;
console.log(combine);

//Is "6" the same as 6 ??

var f = 8;
var g = "4";


var combine2 = f + g;
console.log(combine2);

//Concatinate variables
//Strings as well

var together = "The results of adding numbers is "+combine+".";
console.log(together);