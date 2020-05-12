let num = 103.941;

console.log(num.toFixed(2));
console.log(Math.round(num));

console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//Random will be between 0 and 0.999999
/*
max-min+1 will give range 0-10.9999
floor(math.random*max-min) will provide the decimal output
and adding +min will provide us the range from 10 to 20
*/

console.log(randomNum);

//Challenge area

/*

                    THE GUESSING GAME


    To create a function, the job of the function, it will take in a single arguments.

    The function is going to take in the person's guess a single argument.
    It's going to generate a random number in a given range and figure out if their guess was correct.
    So for us we could say the range is between 1 and 5.
    And if the guess is correct will return true if it is Correct and then false if not correct.
*/

let makeGuess = function (num) {
  let min = 1;
  let max = 5;
  let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === ranNum;
};

console.log(makeGuess(2));
