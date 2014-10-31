/**
 * Created by Selena Vargas on 10/31/14.
 * Web Programming Fundamentals
 *Instructional Assignment: Expressions
 * Section 00
 */



//Slice of Pie Part 1
//Calculate how many leftover slices there will be for sparky

//Given
var slices = 2;
var people = 6;
var ordered = 5;

//Math Equation

//totalSlices = slices * ordered

var totalSlices = slices * ordered;
console.log("total slices of pizza "+totalSlices);

//slicesPerPerson = slices * ordered / people

//Result Variables
var slicesPerPerson = slices * ordered / people;
console.log("slices per person "+slicesPerPerson);
////slices * people /ordered

var together = slices * ordered % people;
console.log("Sparky got "+together+ "slices of pizza.");


