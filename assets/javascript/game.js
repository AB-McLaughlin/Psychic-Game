//setup array of available choices//
   var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",                  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
//setup wins counter//
   var wins = 0;
//setup losses counter//    
   var losses = 0;
//setup guesses left//    
   var userGuess = 0;
//setup letters used//
    var lettersUsed = 0;

// The computer makes a choice
    var computerChoice = letters [Math.floor(Math.random()*
        letters.length)];
        console.log(computerChoice);

//The user makes a choice}
    document.onkeyup = function(){
        var userChoice = String.fromCharCode(event.keyCode).
                toLowerCase();
            console.log(userChoice);
    }
//Compare the computerChoice to the userChoice
  //  if (userChoice == computerChoice){
  //      alert("You guessed correctly!");

//}else (userChoice !== computerChoice){
  //        userGuess--;
    //      lettersUsed//need to insert list maker function here
      //      alert("Not that one");

    
   
        
   





