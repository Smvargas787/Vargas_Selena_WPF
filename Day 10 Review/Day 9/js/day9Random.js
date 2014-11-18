
 /*
Selena Vargas
Random Number Function
WPF 1411
11/14/14
 */

//alert("Testing 1, 2, 3!");

//Create a normal or basic function
 //Normal or basic function returns a value
 //That will take in a min and max number and return a random integer between them.

//Ask the user for a min and max variable

 var min = prompt("Let's find a random number between 2 values\nWhat is the starting or minimum number?");

 //Validate the users response
 while(min==="" || isNaN(min)){
  //Reprompt the user for a valid response
  min=prompt("Please don't leave blank and only use numbers!\nWhat's the min value?");


 }


 var max = prompt("What is the larger value or the max ?");

 //Validate the user for a valid response

 while(max==="" || isNaN(max) || min>max){

  if(max===""){
   //User left blank. Lets yell at them
   max= prompt("Please don't leave this blank.\nWhat is the max value?")


  }else if(isNaN(max)){
   //User didn't type in a number
   max = prompt("Please only type in numbers!\nWhat is the max value?")

  }else if(min>max){
   max = prompt("Please type in a number larger than the min value.\nWhat is the max value?")


  }

 }

 //Function call
 var returnedNumber = randomMizer(min,max);

 console.log("Your random integer between "+min+" and "+max+" is "+returnedNumber+".");

 //Create an array to catch the returned integers
 var number=[];




 //Create a for loop and console.log 15 random integers
 for(var i=0; i<15; i++){
 number.push(randomMizer(min,max));


  console.log(number [i]);


 }

 console.log(number);


 //Create a random number generating function

 function randomMizer(mn,mx){
//Create variable to hold the random number
  //Math.Random() * (max-min) + min
  var randomNumber = Math.round(Math.random() * (mx-mn) + Number(mn));

//Return the random number back to the main code
return randomNumber;



 }