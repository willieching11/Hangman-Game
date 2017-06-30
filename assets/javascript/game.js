var wins = 0;
var guessesRemaining = 12;
var lettersGuessed = [];
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
var randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //Chooses a random Word From a list
var blankWord = new Array(randWord.length);
console.log(randWord);

var image = "<a href='#'><img src='assets/images/film.jfif' width='500' height = '500'/></a>";


for (var i = 0; i < randWord.length; i++) {
  blankWord[i] = "_ ";
}

PrintPage();
      
document.onkeyup = function(event) {
  var pushed = event.key;
  var incorrectLetters = 0;
  var notGuessed = 0;
  var wrongLetter = 0;
  pushed = pushed.toUpperCase();

  if (lettersGuessed[0] != null) {
    for (var i = 0; i < blankWord.length; i++) {
      if (pushed === blankWord[i]) {
        break;
      }
    }
    for (var i = 0; i < lettersGuessed.length; i++) {
      if (lettersGuessed[i] === pushed) {
        break;
      }
      else {
        notGuessed++;
        console.log(notGuessed);
        console.log(lettersGuessed.length);
      }
      if (notGuessed === lettersGuessed.length) {
        lettersGuessed.push(pushed);
        PrintPage();
      }
    }
  }
  else { 
    for (var i = 0; i < randWord.length; i++) {
      if (pushed === randWord[i]) {
        break;
      }
      else {
        wrongLetter++;
      }
    }
    if (wrongLetter === randWord.length) {
      lettersGuessed.push(pushed);
    }
    PrintPage();
  }

  for (var i = 0; i < randWord.length; i++) {
    if (randWord[i] === pushed) {
        blankWord[i] = pushed + " ";
        PrintPage();
        CheckIfDone();
    }
    else {
      incorrectLetters++;
    }
  }
  if (incorrectLetters === randWord.length) {
    guessesRemaining--;
    CheckIfDone();
    PrintPage();
  }
}

function PrintPage() {//Prints out updated stats on screen
  document.getElementById("blank").innerHTML = blankWord.join("");
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
  document.getElementById("image").innerHTML = image;
}

function CheckIfDone() { //Check if player won or lost
  var correctLetters = 0;
  for (var i = 0; i < randWord.length; i++){
    if (blankWord[i] === "_ ") {
      break;
    } 
    else {
      correctLetters++;
    }
  }
  if (correctLetters === randWord.length) {
    var index = 0;
    for (var i = 0; i < wordBank.length; i++) {
      if (randWord != wordBank[i]) {
        index++;
      }
      else {
        image = images[index];
      }
    }
    wins++;
    document.getElementById("wins").innerHTML = wins;
    NewGame();
  }
  if (guessesRemaining === 0) {
    alert('You Lost! :(');
    NewGame();
  }
}

function NewGame() { //Starts a New Game after a Win or loss
  guessesRemaining = 12;
  lettersGuessed = [];
  randWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //Chooses a random Word From a list
  blankWord = new Array(randWord.length);

  for (var i = 0; i < randWord.length; i++) {
    blankWord[i] = "_ ";
  }

  PrintPage();
}