 /*
Selena Vargas
Steak Temperature
WPF 1411
11/5/14
 */

//alert("Testing 1, 2, 3!");

//Ask for steak temp and tell what steak preference

 /*
  Extra-rare or Blue (bleu)		46–49 °C	115–120 °F
  Rare (saignant)		52–55 °C	125–130 °F
  Medium rare (à point)		55–60 °C	130–140 °F
  Medium (demi-anglais)		60–65 °C	140–150 °F	145 °F and rest for at least 3 minutes
  Medium well (cuit)		65–69 °C	150–155 °F
  Well done (bien cuit)	71 °C+	160 °F+	160 °F for ground beef
  */


 //Declare and define the variable for steak temp
 var steakTemp = prompt("What temperature is your steak?");

 if(steakTemp<115){
  console.log("Uncooked Meat - Moooo");

 } else if(steakTemp<=120){
  console.log("Your steak is Extra-Rare")

 } else if(steakTemp<=130){
  console.log("Your steak is rare.");


 } else if(steakTemp<=140){
  console.log("Your steak is Medium-Rare");

 } else if(steakTemp<=150) {
  console.log("Your steak is Medium");

 } else if(steakTemp<=155){
  console.log("Your steak is Medium-Well");

 } else if(steakTemp<=160){
  console.log("Your steak is Well Done");

 } else{
  console.log("Your burn your steak. Hope you like it crispy");

 }
