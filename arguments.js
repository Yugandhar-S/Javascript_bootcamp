//multiple arguments

let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 20, 5);
console.log(result);

//default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
  return "Name: " + name + " - Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//Challenge area

/*
total , tipPercent = .2

*/

let tipCalculator = function (total, tipPercent = 0.5) {
  return total * tipPercent;
};

let tipOne = tipCalculator(100, 0.2);
console.log("The tips is :", tipOne);

let tipTwo = tipCalculator(500, 0.9);
console.log("The tips is :", tipTwo);

let tipThree = tipCalculator(150, 0.45);
console.log("The tips is :", tipThree);
