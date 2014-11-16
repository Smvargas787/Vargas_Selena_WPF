
 /*
Selena Vargas
Wacky Functions
WPF 1411
11/14/14
 */

//alert("Testing 1, 2, 3!");

//Homer & Bart Simpson are trying to create an indoor swimming pool inside their house while Marge & Lisa are out shopping for the day
 //Homer needs to find out how much water he would need to fill up his house before they return.
 //Find out the volume of Homer Simpson's house.

var height = prompt("What is the height of Homer Simpson's house?");

//Validation

 while(height==="" || isNaN(height)) {
  height = prompt("Please enter in a correct value and don't leave blank.\nIe: 5");

 }if(height===""){
  allowance = prompt("Please don't leave blank!\nWhat is the height of Homer Simpson's house?")


 }else if(isNaN(height)){
  allowance = prompt("Please only type in numbers!\nWhat is the height of Homer Simpson's house?\nIe:5")


 }

 var width = prompt("What is the width?");

 //Validation

 while(width==="" || isNaN(width)){
  width = prompt("Please enter in a correct value and don't leave blank.\nIe: 2")


 }if(width===""){
  width = prompt("Please enter in only numbers and don't leave blank.\nIe: 5")


 }else if(isNaN(width)){
  width = prompt("Please enter in only numbers and don't leave blank.\nIe: 22")


 }

var length = prompt("What is the length?");

 while(length==="" || isNaN(length)){
  length = prompt("What is the length?")


 }if(length===""){
  length = prompt("Please enter in a correct value and don't leave blank.\nIe: 9")


 }else if(isNaN(length)){
  length = prompt("Please enter in only numbers and don't leave blank.\nIe: 11")


 }

//Functions

 var anonVolume = function (length,width,height){

  var volume = length * width * height;

  return volume;

 };


 //Function Call

 var returnedAnonVolume = anonVolume(length,width,height);

 console.log("The volume of Homer Simpson's house of water is "+returnedAnonVolume+".");

 

