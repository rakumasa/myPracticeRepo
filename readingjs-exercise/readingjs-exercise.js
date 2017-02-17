// 2/16/2016
// An Introduction to Programming and JavaScript: Arrays, Objects, Iterations

// Question: What are the types of elements in randomArray below?

// var randomArray = ["hi", 3, null, [1, 2, 3], true, "bye"];













// Exercise Write a loop that iterates over the array [1, 2, 3, 4], doubles each element, and stores in back. [2, 4, 6, 8] (who do we appreciate?)

function double(arr){
  var newArr=[];
  for (var i=0;i<arr.length;i++){
    newArr.push(arr[i]*2);
  }
  return newArr;
}

double([1, 2, 3, 4]); //should return [2, 4, 6, 8]

// Exercise Adele is having trouble remembering her own song lyrics. For some reason, all she knows is the word "Hello". Let's help her out.

// var lines = [
//     "It's me.",
//     'Can you hear me?',
//     'from the other side',
//     'from the outside'
// ];
//
// Challenge question: Why is "It's me." using double quotes, while the rest are using single quotes? Try pasting the following into your Chrome developer console: 'It's me.'

function add(arr){
    var newArr = [];
    for (var i=0;i<arr.length;i++){
      newArr.push("Hello, " + arr[i]);
    }
    return newArr;
}

add(["It's me.", "Can you hear me?", "from the other side", "from the outside"]);
