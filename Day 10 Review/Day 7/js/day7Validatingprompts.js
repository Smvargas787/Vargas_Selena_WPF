
 /*
Selena Vargas
Assignment
WPF 1411
Date
 */

//alert("Testing 1, 2, 3!");


//Min Max Number - find a random in between
 //Math.round(Math.random()*(max-min)+min)

 //Ask the user for a minimum variable

 var min = prompt("Lets's find a random number, what's the minimum?");

 //Test if the user skips the prompt - they just press enter
 /*
 if(min===""){
  //The user just pressed enter
  //Reprompt the user
  min = prompt("What's the minimum value?\nPlease do not leave blank.");


 }

     /*

 //Validating uses While loops
 //because we don't know what the user will do

 while(min===""){
  //As long as the user skips it, reprompt.
  min = prompt("What's the minimum value?\nPlease do not leave blank.");



 }


 //Validate the user information

 //Function that checks the type of variable
 //isNaN(variable to check)


 console.log(isNaN(7)); // Returns false
 console.log(isNaN("Cat")); //Returns true
/*
 while(isNaN(min)){
  //Loops as long as it is not a number
  //Reprompt the user

  min=prompt("Please only type in numbers!\nWhat is the minimum value?");



 }
*/
 //Combine both tests together

 while(min==="" || isNaN(min) ){
  //reprompt the user

  if(min===""){
   min=prompt("Please do not leave blank.\nWhat is the minimum value?");



  }else{

   min = prompt("Please only enter numbers(ie 42).\nWhat is the minimum value?");


  }



 }

 //Prompt and validate at the same time

 do{
  var max = prompt("Please only type in numbers and don't leave blank.\nWhat is the max value?");

 }while(max==="" || isNaN(max));

 //Validate if the user types in EXACTLY what you want

 var question = prompt("Please type in Yes or No:");
 while(question!="Yes" && question!="yes" && question!="no" && question!="No"){

  //Reprompt the user
  question=prompt("Please type in ONLY Yes or No:");

 }