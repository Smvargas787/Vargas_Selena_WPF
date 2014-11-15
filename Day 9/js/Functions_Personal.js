
 /*
Selena Vargas
Functions Personal
WPF 1411
11/14/14
 */

//alert("Testing 1, 2, 3!");

//You put a percent of your weekly allowance in the bank for college.
 //Find out how much you have in the bank currently
 // After saving for 5 years.


 var allowance = prompt("How much was your allowance?");

 //Validation

 while(allowance==="" || isNaN(allowance)) {
allowance = prompt("Please enter in a correct value.");

 }if(allowance===""){
  allowance = prompt("Please don't leave blank!\nHow much do you currently have in your bank account?")


 }else if(isNaN(allowance)){
  allowance = prompt("Please only type in numbers!\nHow much do you currently have in your bank account?\nIe:10")


 }


 var percent = prompt("What percent of your allowance did you put in your bank account?");

 //Ternary

 percent/=100;

 (percent==="")?console.log("Please enter a correct value"): (isNaN(percent))? console.log("Please only enter numbers! Ie: 30"):
console.log(percent);
console.log(allowance);

 //Functions
 
