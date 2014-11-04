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
console.log(shoesTotal);

