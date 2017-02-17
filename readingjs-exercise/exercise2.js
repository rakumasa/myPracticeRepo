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
