//Set up variables
var wins = 0;//tallies wins
var losses = 0;//tallies losses
var guessesLeft = 8; //counts down from 8
var guessesSoFar = []; // array to push user guess to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters for computer to choose
//Set up functions
function updateWins() {
    document.querySelector("#win").innerHTML = "Wins: " + wins;
  }//update wins

  function updateLosses() {
    document.querySelector("#loss").innerHTML = "Losses: " + losses;
  }//update losses
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess, converting it to lower case if needed
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //push userGuess to array guessesSoFar
    document.getElementById("used").innerHTML="Guesses used: " + guessesSoFar;//reset guesses used counter to 0

    if (userGuess == computerGuess) {
        wins++;//adds 1 to var wins
        alert('You Won! Press any letter to play again!');
        updateWins();//updated wins
        guessesLeft = 8; //reseting the guessesLeft back to 9 so that the user can play again
        guessesSoFar.length = 0; //this removes everything from the guessesSoFar array, so that the guesses from the previous round don't show
        document.getElementById("used").innerHTML="Guesses used: " + guessesSoFar;//
        
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You lost. Press any letter to try again.');
        updateLosses();
        guessesLeft = 8;
        guessesSoFar.length = 0;
        document.getElementById("used").innerHTML="Guesses used: " + guessesSoFar;
        
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; //reducing the guesses left
        document.getElementById("left").innerHTML="Guesses Left: " + guessesLeft;
    }
}
