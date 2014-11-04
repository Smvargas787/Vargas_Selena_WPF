/**
 * Selena Vargas
 * Expressions: Personal
 * WPF 1411
 * 11-3-14
 **/

alert("You're going on a shopping spree! You purchased 5 pairs of shoes at Footlocker and you want to know how much you spent.");

var fiveShoes = [];
fiveShoes[fiveShoes.length] = prompt("Pair 1 cost:");
console.log("The first pair cost $" + fiveShoes[0] + ".00.");

fiveShoes[fiveShoes.length] = prompt("Pair 2 cost:");
console.log("The second pair cost $"+fiveShoes[1] +".00.");

fiveShoes[fiveShoes.length] = prompt("Pair 3 cost:");
console.log("The third pair cost $"+fiveShoes[2]+".00.");

fiveShoes[fiveShoes.length] = prompt("Pair 4 cost:");
console.log("The fourth pair cost $"+fiveShoes[3]+".00.");

fiveShoes[fiveShoes.length] = prompt("Pair 5 cost:");
console.log("The fifth pair cost $"+fiveShoes[4]+".00.");

//Total cost of shoes

var shoesTotal = (parseInt(fiveShoes[0]) + parseInt(fiveShoes[1]) + parseInt(fiveShoes[2]) + parseInt(fiveShoes[3]) + parseInt(fiveShoes[4]) );
console.log("Your current total is now $"+shoesTotal+".00.");

var saleDiscount = prompt("Congratulations! You were able to receive $5.00 off of your previous total. Please enter your previous total.");

shoesTotal--;
shoesTotal--;
shoesTotal--;
shoesTotal--;
shoesTotal--;
console.log("Your new total with your discount is now "+shoesTotal+".00.");

var moreDiscounts = prompt("It must be your lucky day! You've just been awarded another 10% off of your original purchase! Press okay to fall in love with your new price!");

shoesTotal*=.9;
console.log("10% off on top of your previous total now leaves you with a purchase price of "+shoesTotal+"!");

//Help Center Number



