 /*
 Selena Vargas
For Loops
WPF 1411
11/7/14
 */


//alert("Testing 1, 2, 3!");

 //Basic For Loops
 //for(initialization of counter; condition to test; increment of Change)
 //i - stands for iteration

 for( var i=100; i>0; i-=10){
  console.log(" i = "+i);


 }


 //Break

 //Create a for loop but if counter is 3, I want to stop the loop

 for(var j = 0; j<5; j++ ){
  console.log("J = "+j );
if(j===3){
 break; //This stops your loop from cycling!

}

 }