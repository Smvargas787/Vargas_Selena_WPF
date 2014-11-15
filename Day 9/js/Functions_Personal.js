
 /*
Selena Vargas
Functions Personal
WPF 1411
11/14/14
 */

//alert("Testing 1, 2, 3!");

//You put a percent of your weekly allowance in the bank for college.
 //Find out how much you have in the bank currently
 //and how much allowance you have earned.


 var allowance = prompt("How much was your allowance?");

 //Validation

 while(allowance==="" || isNaN(allowance)){


 }if(allowance===""){
  allowance = prompt("Please don't leave blank!\nHow much do you currently have in your bank account?")


 }else if(isNaN(allowance)){
  allowance = prompt("Please only type in numbers!\nHow much do you currently have in your bank account?\nIe:10")


 }


 var percent = prompt("What percent of your allowance did you put in your bank account?");

 //Validation

 while(percent==="" || isNaN(percent)){
  //Reprompt
  percent = prompt("Please don't leave blank and only use numbers!\nWhat percent of your allowance did you put in the bank?\nIe:30 ")


 }