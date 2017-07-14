var wins = 0;
var guessesRemaining = 12;
document.getElementById("wins").innerHTML = wins;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
var incorrectLetters = [];
var wordBank = ['TERMINATOR', 'GLADIATOR', 'TWILIGHT', 'CINDERELLA', 'FROZEN', 'INCEPTION', 'WATCHMEN', 'ALADDIN', 'ARMAGEDDON', 'RATATOUILLE', 'THOR']; //Create a list of possible words
var images = [
  "<a href='#'><img src='assets/images/terminator.jpg' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/gladiator.jfif' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/twilight.jpg' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/cinderella.jfif' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/frozen.jpg' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/inception.jpg' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/watchmen.jpg' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/aladdin.jfif' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/armageddon.jfif' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/ratatouille.jpg' width='358' height = '500'/></a>",
  "<a href='#'><img src='assets/images/thor.jpg' width='358' height = '500'/></a>"
  ];
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //Chooses a random Word From a list
var blankWord = [];
console.log(currentWord);

var image = "<a href='#'><img src='assets/images/film.jfif' width='500' height = '500'/></a>";


for (var i = 0; i < currentWord.length; i++) { //Makes a array with blank spaces to start game
  blankWord[i] = "_ ";
}
document.getElementById("word").innerHTML = blankWord.join("");
document.getElementById("image").innerHTML = image;
document.onkeyup = function(event) { //key is pressed
  var pressed = event.key;
  pressed = pressed.toUpperCase();
  var misses = 0;
  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === pressed) {
      blankWord[i] = pressed;
      document.getElementById("word").innerHTML = blankWord.join("");
    }
    else {
      misses++;
    }
  }
  if (misses === currentWord.length) {
    var counter = 0;
    for (var i = 0; i < incorrectLetters.length; i++) {
      if (pressed === incorrectLetters[i]) {
        break;
      }
      else {
        counter++;
      }
    }
    if (counter === incorrectLetters.length) {
      incorrectLetters.push(pressed);
      guessesRemaining--;
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
      document.getElementById("lettersGuessed").innerHTML = incorrectLetters;
    }
  }
  checkIfDone();
}

function checkIfDone() { //Check if player won or lost
  var counter = 0;
  for (var i = 0; i < blankWord.length; i++) {
    if (blankWord[i] === "_ ") {
      break;
    }
    else {
      counter++;
    }
  }
  if (counter === blankWord.length) {
    wins++;
    for (var i = 0; i < wordBank.length; i++) {
      if (wordBank[i] === currentWord) {
        image = images[i];
      }
    }
    newGame();
  }
}

function newGame() { //Starts a New Game after a Win or loss
  guessesRemaining = 12;
  incorrectLetters = [];
  currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  blankWord = [];
  for (var i = 0; i < currentWord.length; i++) {
    blankWord[i] = "_ ";
  }
  console.log(currentWord);

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("word").innerHTML = blankWord.join("");
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  document.getElementById("lettersGuessed").innerHTML = incorrectLetters;
  document.getElementById("image").innerHTML = image;
}