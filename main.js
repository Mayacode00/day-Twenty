let randomNumber = parseInt(Math.random() * 50 + 1);
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
  document.querySelector(".prev-guess").innerHTML += inputedNum + " ";
}
function comment(message) {
  document.querySelector(".message").innerHTML = message;
}
function livesRemain(livesvalue) {
  document.querySelector(".guess-remaining").innerHTML = livesvalue;
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
    alert("wow wow wow!!!,not this high homie");
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
    comment("You guessed too low");
    usedLive++;
    if (usedLive === 10) {
      stopGame();
    } else {
      start();
    }
    livesRemain(10 - usedLive);
  } else {
    comment("Yaaaaaayyyy you finally got it");
    begin();
  }
}
function restart() {
  randomNumber = parseInt(Math.random() * 50 + 1);
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
  comment("Ouch now I'm sad,here is the number" + randomNumber);
}
function begin() {
  inputBar.setAttribute("disabled", "");
}
begin();
