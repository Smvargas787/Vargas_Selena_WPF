
 /*
Selena Vargas
Scope
WPF 1411
11/12/14
 */

//alert("Testing 1, 2, 3!");

//Variable Scope
 //Variables inside and outside of a function

 //We try not to use the same names for variables.....BUT
 //In large files, this is going to be impossible.

 //When you create a variable inside of a function, it only exist
 //inside of that one function.




 //Create a variable for width (main code)
 var width = 5; //Scoped outside of the function or scoped to main code
 console.log("Starting width in main code is "+width);


 //Create a function that calculates the perimeter of a rectangle

 function calcPeri(){

  var width = 10; //Scoped to the function CalcPeri
  console.log("Inside of the function, the width is "+width);
 var height = 20;
  var perimeter = width*2+height*2;

  console.log("Inside of function, the perimeter is "+perimeter);


 }
console.log("Before function call "+width);
 calcPeri();
 console.log("After function call, "+width);



 //This won't work because you can't see inside of a function
 //console.log("Outside of function perimeter is "+perimeter);