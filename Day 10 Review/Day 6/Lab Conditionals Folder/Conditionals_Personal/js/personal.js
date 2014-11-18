/*
 Selena Vargas
Personal Conditionals
WPF 1411
11/7/14
 */

//alert("Testing 1, 2, 3!");

//Phone Tragedy Scenario

alert("Your phone recently just broke and your bank account is completely empty from the plane tickets you just bought." +
" However you need a new phone before you leave in 6 weeks.");

var job = prompt("How much do you make an hour at your job?");

if(job===""){
 console.log("Please enter some valid information.");
 job = prompt("How much do you make an hour at your job?");



 }else{
 console.log("Thank you, please proceed.");

}

  var  hours = prompt("How many hours do you work a week?");
var  government = prompt("How much does the government take out of your paycheck?");
var tripMoney = 700;

var paycheck = (job*hours)-government;


//Ternary

(paycheck>352) ? console.log("You can hurry up and buy that bad boy before people think you vanished from the face of the planet!") :
    console.log("You better start begging your boss for more hours because it looks like you're going to be stranded on that plane with no phone.");

//Else if statement

if(paycheck>400){
 console.log("You can also buy a case with that phone!")

}else {
 console.log("You should probably save the rest of that money for your trip instead so you don't starve.")


}


//Logical statements
if(paycheck>=tripMoney && paycheck>800){
 console.log("You can purchase that phone and still have enough money to shop until you drop on your trip as well!");

} else {
 console.log("Although, I wouldn't spend so much money if I was you, your money isn't increasing anymore.");
}

