/*
1.Create a constructor function for the hangman game
2.set up two attributes. One for the word itself. Another for the number of guesses allowed
3.Create two instances of it and print it to the console
*/

const Hangman = function (word, remainingGuesses) {
  this.word = word;
  this.remainingGuesses = remainingGuesses;
};

let game1 = new Hangman("Papersoft", 5);
let game2 = new Hangman("Cello", 2);

console.log(game1);
console.log(game2);
