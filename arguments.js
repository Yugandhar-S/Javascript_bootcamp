//multiple arguments

let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 20, 5);
console.log(result);

//default arguments

let getScoreText = function (name = "Anonymous", score = 0) {
  //return "Name: " + name + " - Score: " + score;
  return `Name : ${name} - Score : ${score}.`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

//Challenge area

/*
total , tipPercent = .2

template string : A 25 percent tip on $40 would be $10

*/

let tipCalculator = function (total, tipPercent = 0.5) {
  return `A ${tipPercent * 100} % tip on $${total} is $${total * tipPercent}`;
};

let tipOne = tipCalculator(100, 0.2);
//console.log("The tips is :", tipOne);
console.log(tipOne);

let tipTwo = tipCalculator(500, 0.9);
console.log(tipTwo);

let tipThree = tipCalculator(150, 0.45);
console.log(tipThree);

let tipFour = tipCalculator(60);
console.log(tipFour);

//The template string learning was done with below program
let name = "Yoda";
let age = 24;
console.log(`Hey My name is ${name} Salvi!!, I am ${age} year's old.`);
