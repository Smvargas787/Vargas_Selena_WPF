
 /*
Selena Vargas
Validating Prompts
WPF 1411
11/10/14 */

//alert("Testing 1, 2, 3!");

var randomCounting = prompt("Let's count randomly, pick a number to start with.");

if(randomCounting===""){

 randomCounting = prompt("Pick a number to start with.\nPlease do not leave blank.");


}


 while(isNaN(randomCounting)){



 }

 randomCounting = prompt("Please only type in numbers.\nPick a value to start with. ie: 5.");

 while(randomCounting==="" || isNaN(randomCounting) ){


  if(randomCounting===""){
   randomCounting=prompt("Please do not leave blank.\nPick a value to start with.");



  }else{

   randomCounting = prompt("Please only enter numbers(ie 10).\nPick a value to start with.");


  }

 }

