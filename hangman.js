const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
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

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
};

// Hangman.prototype.generateDom = function () {
//   let winPuzzle = document.createElement("h1");
//   winPuzzle.textContent = this.getPuzzle();
//   document.getElementById("container").appendChild(winPuzzle);
//   console.log(this.getPuzzle());

//   let winGuess = document.createElement("p");
//   winGuess.textContent = this.remainingGuesses;
//   document.getElementById("container").appendChild(winGuess);
//   console.log(this.remainingGuesses);
// };

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1 = new Hangman("Cat", 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;

// game1.generateDom();
// game2.generateDom()

window.addEventListener("keypress", (e) => {
  let guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.remainingGuesses;
});
