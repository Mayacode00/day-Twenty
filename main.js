let randomNumber = parseInt(Math.random() * 100 + 1);
let inputBar = document.querySelector(".input-bar");
const guessBtn = document.querySelector(".guess-button");
let guessedNumber = [];
let usedLive = 0;
document
  .querySelector(".guess-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputedNum = parseInt(inputBar.value);
    rangeCheck(inputedNum);
  });

function addGuesses(inputedNum) {
  guessedNumber.push(inputedNum);
}
function showGuesses(inputedNum) {
  document.querySelector(".prev-guess").innerHTML += inputedNum + "";
}
function comment(message) {
  document.querySelector(".message").innerHTML = message;
}
function livesRemain(livesvalue) {
  document.querySelector(".guess-remaining").innerHTML += livesvalue;
}
function start() {
  inputBar.value = "";
}
function rangeCheck(inputedNum) {
  if (isNaN(inputedNum)) {
    alert("Really? durhhhh");
  } else if (inputedNum < 1) {
    alert("Awwww you arent clearly ready, thats too low");
  } else if (inputedNum > 100) {
    alert("wow wow wow!!!,not this high hommie..take it easy on me okay?");
  } else {
    addGuesses(inputedNum);
    showGuesses(inputedNum);
    reviewGuess(inputedNum);
  }
  start();
}
function reviewGuess(inputedNum) {
  if (inputedNum > randomNumber) {
    comment("Too much please reduce it");
    usedLive++;
    if (usedLive === 10) {
      stopGame();
    } else {
      start();
    }
    livesRemain(10 - usedLive);
  } else if (inputedNum < randomNumber) {
    comment("You guessed too low hommie!!");
    usedLive++;
    if (usedLive === 10) {
      stopGame();
    } else {
      start();
    }
    livesRemain(10 - usedLive);
  } else {
    comment("Yaaaaaayyyy hommie you finally got it");
    begin();
  }
}
function newGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  document.querySelector(".restart").value = "Restart Game";
  guessedNumber = [];
  inputBar.removeAttribute("disabled", "");
  usedLive = 0;
  start();
  comment("");
  livesRemain("10");
  document.querySelector(".prev-guess").innerHTML = "";
}
function stopGame() {
  inputBar.setAttribute("disabled", "");
  comment("Ouch you messed up hommie" + randomNumber);
}
function begin() {
  inputBar.setAttribute("disables", "");
}
begin();
