
 /*
Selena Vargas
Anonymous
WPF 1411
11/14/14
 */

//alert("Testing 1, 2, 3!");

/*
Basic function
function functionName(){

//Code goes here

}

Anon function
var functionName = function (){

//Code goes here

};

 */


 //A normal function to find the area of a triangle

 function triangleArea(base,height){

  var area = .5 * base * height;

  return area;



 }

 //Function Call for normal function
 var returnedArea = triangleArea(4,5);
 console.log("Returned area for normal function is "+returnedArea+".");


 //Anonymous Function that calculates triangle area

 var anonTriArea = function (base,height) {
  var area = .5 * base * height;
  return area;



 };



 //Function call for anon function

 var returnedAnonArea = anonTriArea(2,3);

 console.log("The returned area from the anon function is "+returnedAnonArea+".");

