
 /*
Selena Vargas
Industry Functions
WPF 1411
11/14/4
 */

//alert("Testing 1, 2, 3!");

//Square Space wants you to make them some new templates for their users to build new websites for themselves.
 //For each template you make they're willing to pay you $1,500.
 //Find how how much you'll make after all your hard work on coding their templates is done.

var templates = prompt("How many templates do you wanna create for Square Space to use?");

 //Validation

 while(templates==="" || isNaN(templates)){
  //Reprompt the user for a valid response
  templates=prompt("Please don't leave blank and only use numbers!\nHow many templates do you wanna create for Square Space to use?");


 }


 //Function

 function templatePaycheck (templateNumber, paycheck){

  paycheck = 1500;

  var  totalForPay = 1500 * templateNumber;

  return totalForPay;
 }

 