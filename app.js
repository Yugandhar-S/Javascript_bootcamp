const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1 = new Hangman("Car Parts", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;
console.log(game1.status);

window.addEventListener("keypress", (e) => {
  let guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
  console.log(game1.status);
});
