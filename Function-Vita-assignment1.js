/*
To  take 3 numbers and print the max number
*/
let max = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `The max number is ${num1}`;
  } else if (num2 > num3 && num2 > num1) {
    return `The max number is ${num2}`;
  } else {
    return `The max number is ${num3}`;
  }
};

let maxNumber = max(4, 6, 3);
console.log(maxNumber);
