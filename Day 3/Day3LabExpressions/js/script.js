/**
 * Created by Selena Vargas on 10/31/14.
 * Web Programming Fundamentals
 *Instructional Assignment: Expressions
 * Section 00
 */



//Slice of Pie Part 1 & 2
//Calculate how many leftover slices there will be for sparky

//Given
var slices = 2;
var people = 6;
var ordered = 5;

//Math Equation

//totalSlices = slices * ordered

var totalSlices = slices * ordered;
console.log("Total slices of pizza "+totalSlices);

//slicesPerPerson = slices * ordered / people

//Result Variables
var slicesPerPerson = slices * ordered / people;
console.log("Each person ate "+slicesPerPerson+" "+"slices of pizza at the party.");

////slices * people /ordered

var together = slices * ordered % people;
console.log("Sparky got "+together+ ""+" slices of pizza.");

//Average Shopping Bill

var week1 = 100;
var week2 = 300;
var week3 = 250;
var week4 = 120;
var week5 = 98;

//Total amount spent
var totalamount = (week1+week2+week3+week4+week5);

var averageAmount = (totalamount / 5);

console.log("You have spent a total of $"+totalamount+" on groceries over 5 weeks. That is an average of $ "+averageAmount+" per week");

//Discounts
//Given

var originalPrice = 100;
console.log("The original price of the item is $"+originalPrice+".");

var discountPrice = 50;
var Discount = discountPrice / 100;
console.log("The discount for the item is "+discountPrice+"%.");

var item = "Ipod";
console.log("The item is an "+item+".");

var salesTax = 6.1;
var tax = (salesTax * discountPrice);
console.log("The sales tax is "+salesTax+"%.");

var withoutTax = (originalPrice - discountPrice);
console.log("The Ipod without tax involved is $"+withoutTax+".");

var itemtax = ()


