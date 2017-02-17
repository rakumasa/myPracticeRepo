// 2/16 Question Return the last number in array (bonus if you can add the feature of pick the even number from the last)

function get_last(arr){
  return arr[arr.length-1];
}

get_last([4,5,6,7,22,55]);

//Or

var arr=[4,5,6,7,22,55];

var last=arr.pop();

//this one has a feature with finding even number

function get_last(arr){
  var last; //place holder
  for (var i=0;i<arr.length;i++){
    if(arr[i]%2===0){ //check the number is even or not
      last=arr[i]; //if the number is even, assign that number is "last"
    }
  }
  return last;//show the answer
}

get_last([4,5,6,7,22,55]);


// 2/16 Object practice

///In javascript an object is a dictionary
///The dictionary consists of several key/value pairs.
///When you call the key,it spits out the value.
///There are two ways to invoke a key. Bracket syntax and dot notation.

var emotion_map = {anger: 128, idle: 1, peace: 1,
      fulfillment: 147, joy: 147, supported: 147,
      gratitude: 147, fear: 167, worried: 167,
      excitement: 188, embarrassment: 199,
      frustrated: 212, concerned: 228 };

// console.log(emotion_map["joy"]); //or "emotion_map.joy"(dot notation) and "emotion_map["joy"]"(bracket notation)

// bracket notation ... take variable
// dot notation ... doesn't take variable

//
var pracObj = {name:["Arizona", "Oregon", "Idaho"], //pracObj["name"][0] or pracObj.name[0]
              action:"cactus tour",
              city: "Phoenix",
              thought: {Arizona:"summer is hot", Oregon:"raining all the time", California:"a lot of best restaurant"},
              climate:"super sunny"
              }

// console.log(pracObj["name"] + " is " + pracObj["climate"] + " and " + pracObj["thought"] + ". And join a " + pracObj["action"]);

console.log(pracObj["name"][0]);

//for in loop

for (var thing in obj){ //key in obj
  console.log(obj[thing]);
}
