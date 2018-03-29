//Set up variables
var wins = 0;
var losses = 0;
var guessesLeft = 9; //counts down from 9
var guessesSoFar = []; // array to push user guess to
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters for to choose from
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess, converting it to lower case if needed
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess); //pushing user guess to array guesses so far
    if (userGuess == computerGuess) {
        wins++;
        alert('You guessed corrrectly. You Won! Play again!');
        guessesLeft = 9; //reseting the guessesLeft back to 9 so that the user can play again
        guessesSoFar.length = 0; //this removes everything from the guessesSoFar array, so that the guesses from the previous round don't show
    }
    else if (guessesLeft == 0){
        losses++;
        alert('You guessed incorrectly. You lost. Try again.');
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; //reducing the guesses left
    }  
    // Taking the tallies and displaying them in HTML    
    var html = "<h1>The Psychic Game</h1>" + 
    "<h2>Guess what letter I'm thinking of?</h2>" +
    "<p>Wins: " + 
    wins + 
    "</p>" +
    "<p>Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Guesess Used: " +
    guessesSoFar +
    "</p>"
    ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}
