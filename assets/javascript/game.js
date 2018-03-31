//Set up variables
var result;
var wins = 0;//tallies wins
var losses = 0;//tallies losses
var guessesLeft = 9; //counts down from 9
var guessesSoFar = []; // array to push user guess to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters for computer to choose

function updateWins() {
    document.querySelector("#win").innerHTML = "Wins: " + wins;
  }

  function updateLosses() {
    document.querySelector("#loss").innerHTML = "Losses: " + losses;
  }
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess, converting it to lower case if needed
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //push userGuess to array guessesSoFar
    document.getElementById("used").innerHTML="Guesses used: " + guessesSoFar;

    if (userGuess == computerGuess) {
        wins++;//adds 1 to var wins
        alert('You guessed corrrectly. You Won! Play again!');
        guessesLeft = 9; //reseting the guessesLeft back to 9 so that the user can play again
        guessesSoFar.length = 0; //this removes everything from the guessesSoFar array, so that the guesses from the previous round don't show
        updateWins();//updated wins
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You guessed incorrectly. You lost. Try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
        updateLosses();
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; //reducing the guesses left
        document.getElementById("left").innerHTML="Guesses Left: " + guessesLeft;
    }
}
