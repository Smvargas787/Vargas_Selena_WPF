/*
Selena Vargas
Ternary
WPF 1411
11/5/14
 */

//alert("Testing 1, 2, 3!");


//If your gpa is greater than 2.0 then you graduate


var gpa = 3.5;


if(gpa>2.0){
 console.log("Congrats you graduate!");


} else {
 console.log("Sorry, study more!");


}

//Convert to a ternary
// (condition to test) ? true code:else code;

(gpa>2.0) ? console.log("Congrats you graduate!") : console.log("Sorry, study more!");

//Set a variable equal to the outcome
//Kids under 10 read Green Eggs and Ham
//Kids 10 and older read The Time Machine

var age = 16;
var book;

book = (age>=10) ? "The Time Machine": "Green Eggs and Ham";

//Kids 14 and older read Twilight
book = (age<10) ? "Green Eggs and Ham" : (age<14) ? "The Time Machine" : "Twilight";

console.log(book);


//Longer/Regular way to code it
if(age>=10){
 book = "The Time Machine"

} else{
 book ="Green eggs and ham"

}

