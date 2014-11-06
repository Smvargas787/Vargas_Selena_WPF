/*
Selena Vargas
Logical Operators
WPF 1411
11/5/14
 */

//alert("Testing 1, 2, 3!");


//Buying an ipad
//If the price is less than or equal to our budget OR our paycheck is over $10000
//Then we can buy the ipad

var budget = 300;
var ipadPrice = 500;
var paycheck = 1200;

//&& and logical operator
//The ipad must be BOTH these things
if(ipadPrice<=budget && paycheck>1000){
   console.log("Ipad is within budget and your check is over 1000");

} else {
    console.log("Can't buy the ipad");
}


// || - or logical operator
//we can if one of the conditions is met

if(ipadPrice<=budget || paycheck>1000){
    console.log("You can buy the ipad");

} else{

    console.log("You can't buy the ipad");
}



//&& and logical operator
//The ipad must be BOTH these things
//OR I win the lottery
var wonLottery = true;

if((ipadPrice<=budget && paycheck>1000) || wonLottery===true ){
    console.log("Ipad is within budget and your check is over 1000");

} else {
    console.log("Can't buy the ipad");
}
