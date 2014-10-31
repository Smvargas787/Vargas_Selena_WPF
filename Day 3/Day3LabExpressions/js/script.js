/**
 * Created by Selena Vargas on 10/31/14.
 * Web Programming Fundamentals
 *Instructional Assignment: Expressions
 * Section 00
 */

//Slice of Pie Part 1
// Calculate how many slices each person will get at the party

//Given
var slices = 2;
var people = 6;
var ordered = 5;

//Math Equation
//slices * people /ordered

//Result Variables
var pizzaSolution = (slices*people)/ordered;
console.log(pizzaSolution);

//Result Format
var together = "Each person ate "+pizzaSolution+" slices of pizza at the party.";
console.log(together);

//Slice of Pie Part 2
//Calculate how many leftover slices there will be for sparky

//Given
var slices = 2;
var people = 6;
var ordered = 5;

//Math Equation
//slicesPerPerson = slices * ordered / people

//Result Variables
var slicesPerPerson = slices * ordered % people
console.log(slicesPerPerson)
////slices * people /ordered

var together = "Sparky"


