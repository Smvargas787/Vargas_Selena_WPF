 /*
Selena Vargas
Math Class
WPF 1411
11/7/14
 */

//alert("Testing 1, 2, 3!");


//Normal Rounding
 //.5+ goes up, else goes down

 var num1 = 9.544;
 console.log(num1);
 console.log(Math.round(num1));

 //Floor Rounding
 //Always rounds down

var num2 = 6.8;
 console.log(num2);
 console.log(Math.floor(num2));

 //Ceiling round
 //Always rounds up

 var num3 = 4.8;
 console.log(num3);
 console.log(Math.ceil(num3));

 //How to get specific number of decimals
 //toFixed - not part of Math

 var num4 = 6.7893;
 console.log(num4);
 console.log(num4.toFixed(2));

 //Random Numbers
 //Math.random() - gives values 0 and almost 1.
 //Nothing goes inside of the ()

 var num5 = Math.random();
 console.log(num5);

 //Number 0-10
 var num6 = Math.random()*10;
 console.log(num6);

 //Integers between 0-10
 var num7 = Math.round( Math.random()*10);
 console.log(num7);

 //Integers between 0-100
 var num8 = Math.round(Math.random()*100);
 console.log(num8);

 //Get a random integer between any 2 values
 // Math.random() * (max-min) + min

 //Random between 50-->80
 var num9 = Math.round(Math.random()*(80-50)+50);
  num9 = num9.toFixed(2);
 console.log(num9);

 //Prompt the user for max and min value
 //Then find a random number between them

 var max = prompt("Let's find a random number, what's the max value?");
 var min = prompt("Please type in a minimum number.");

 //Find the random integer

 var randomNum = Math.random()*(max-min) +Number(min);
 console.log(randomNum);
 console.log("Your random number is "+randomNum+".");

//Math Class constant
 //Number that never changes
 //Always uppercase
 //Math.PI - 3.1459.....
 //Circumference of a circle
//2*pi*r

 var radius = 7;
 var circleArea = 2*Math.PI * radius;
 console.log(circleArea);

