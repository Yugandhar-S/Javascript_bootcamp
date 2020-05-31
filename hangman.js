/*
1. Set up the word instance property as an array of lower case letter
2. Set up another instance property to store guessed letters
3. Create a method that gives you the word puzzle back

NO GUESSES => ***
GUESSED => 'c', 'b' and 't' -> c*t
*/

const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = ["p",'r','c'];
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

// Hangman.prototype.puzzleBack = function () {
//   this.guessedLetters.forEach((letter) => {
//     this.word.forEach((word) => {
//       if (word === letter.toLowerCase()) {
//         console.log(`${word}`);
//       } else {
//         console.log("*");
//       }
//     });
//   });
// };

let game1 = new Hangman("Papersoft", 5);
console.log(game1.getPuzzle());
// console.log(correctWord);
// console.log(game1.puzzleBack())
let game2 = new Hangman("Cello", 2);
console.log(game2.getPuzzle());

// console.log(game1);
// // console.log(game2);
