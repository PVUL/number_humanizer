// console.log("Hello World");

// var a = 1;
// var b = 2;
//
// var c = a + b;
// console.log("The sum of " + a + " and " + b + " is " + c);

// var numbers = [3,2,6];
// for (var i = 0; i < numbers.length; i++){
//   console.log(numbers[i]);
// }



// var x = 101;
// var test = numberCategorizer(x);
//
// function numberCategorizer(x) {
//   if (x < 0){
//     return false;
//   };
//   if (x > 100){
//     return false;
//   };
//   return true;
//
//   // is the number a roman numeral, decimal/integer, english?
//
// };
//
// console.log(x + ' is between 0 and 100: ' + test) // false



// var stringType = typeof 'string'; // string
// var numType = typeof 1; // number
// console.log(num);
// console.log(numType);

var numbers = [1, 'two', 'three', 4, 'five', 6];
var numberToStringDictionary = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve'
};
var stringToNumberDictionary = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12
};

function numberConverter(num) {
  if (typeof num == 'number') {
    return numberToStringDictionary[num];
  };
  if (typeof num == 'string') {
    return stringToNumberDictionary[num.toLowerCase()];
  };
};

for (var i = 0; i < numbers.length; i++){
  console.log(numbers[i] + ': ' + numberConverter(numbers[i]));
};
