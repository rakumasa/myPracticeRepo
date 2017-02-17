// Exercise Write a loop that iterates over the array [1, 2, 3, 4], doubles each element, and stores in back. [2, 4, 6, 8] (who do we appreciate?)

function double(arr){
  var newArr=[];
  for (var i=0;i<arr.length;i++){
    newArr.push(arr[i]*2);
  }
  return newArr;
}

double([1, 2, 3, 4]); //should return [2, 4, 6, 8]
