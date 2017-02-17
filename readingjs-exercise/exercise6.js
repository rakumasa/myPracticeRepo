// Write code to print all the odd numbers between 1 and 100. Do this using a for loop and a while loop.

//for loop

function count(numbers){
  var newArr = [];
  for (var i=1;i<=100;i++){
    if(i%2===1){
    newArr.push(i);
    }
  }
  return newArr;
}

count(1);


//while loop

var i = 1; //starting point
while (i<=100) { //loop and ending point
  console.log(i); //how do you want to output
  i+=2; //how do you wan to increment
}
