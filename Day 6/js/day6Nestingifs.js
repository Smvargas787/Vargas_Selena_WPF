 /*
Selena Vargas
Nesting If Statements
WPF 1411
11/7/14
 */

//alert("Testing 1, 2, 3!");



//Some decisions depend on other decisions

 //If it is warm enough lets go to the beach, if not lets go to the movies
//If the water is warm enough, let's go swimming, if not lets just lay out and get a tan

 //Choose between a kids movie or horror - are you taking a child

//Get temp
 var temp = 89;
 var waterTemp =50;

 //Are you taking a child
 var child = false;


 //If else statement
if(temp>70){
 console.log("Let's go to the beach!");

 //Test the water temp
 if(waterTemp>75){
  console.log("Let's go swimming in the water!");

 } else{
  console.log("Let's layout and get a tan!");

 }




} else {
 console.log("Let's go to the movies!");

 if(child){
  console.log("Go see an animated feature!");


 }else{
  console.log("Bring the blood. It's time for horror!");

 }


}

//Using && and || Or

 if(temp>70 && waterTemp>75){
  console.log("Let's go to the beach!\nLet's go swimming")

 } else if(temp>70 && waterTemp<=75){
  console.log("Let's go to the beach!\nLet's get a tan!");


 }else if(temp<=70 && child){
  console.log("Let's go to the movies!\nLet's see an animated movie!");

 }else if(temp<=70 && !child){
  console.log("Let's go the movies!\nLet's see a horror movie!")

 }









