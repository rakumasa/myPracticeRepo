// Explain what the code below is doing. Why is a while loop more suitable than a for loop in this case?

var total = 0; //number of head up come, initially zero
var flip = Math.random(); //return the number between 0 to 1
while (flip > 0.5) { // if flip is larger than 0.5 which is heads
  total++; // perform total = total + 1
  flip = Math.random(); //perform another coin flip until getting back of coin
 }
console.log("Number of consecutive times heads came up: " + total);


// Answer
// Above code is flipping a coin and count how many times heads came up. "Total" is the number of how many times heads came up, initially is 0. I put the note right next to the code for what they are doing.
//
// The reason I can't use the for loop is, there is no value to set starting point and ending point to repeat flipping the coin.
//
// //For loop
// var total = 0;
//
// function flipCoin(){
//
//   for (var i=??; i<??; total++) {
//       flip = Math.random
//   }
// }
