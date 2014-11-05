 /*
Selena Vargas
Industry Expressions
WPF 1411
11/4/14
 */

alert("Bob the Builder is making a sprinkler business and wants you to design a website for his new found company Water Works.\nAssuming his company logo has yet to be made, we want to figure out how much the perimeter is of a square shaped logo to cover the whole header.");

//Calculate square perimeter
 //perimeter = 4a

var a = prompt("Lets set up our calculations, please enter the length and width that you prefer for the square logo?");
 var numFour; prompt("To find the perimeter of a square we must multiply the length and width by 4, please enter the number 4 now.");

//Correct Calculations

 var perimeter = a * 4;

 var answer = "The perimeter of Water Works square logo is now "+perimeter+"in.";
 console.log(answer);
 alert(answer);

alert("Now that we've placed the logo perfectly on the header of the website, Bob wants us to make sure we add in his 3 different locations he runs his business from.");

 var firstLocation = prompt("Please enter the first location you wish for Bob to serve in.") ;
 var secondLocation = prompt("Second location you wish for Bob to serve in.");
 var thirdLocation = prompt("Third location you wish for Bob to serve in.");


 var bobsLocations = firstLocation+","+secondLocation+",& " +thirdLocation+".";
 console.log(bobsLocations);


