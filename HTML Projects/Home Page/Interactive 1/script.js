// ROCK PAPER SCISSORS
// Create a list of all variables with the choices of "rock", "paper", "scissors" 
const choices = ["rock", "paper", "scissors"];

// Set the display variables for the player, computer, and result.
let playerDisplay
let computerDisplay
let resultDisplay

// Gather the data from each element when the webpage loads
document.addEventListener("DOMContentLoaded", function () {
  playerDisplay = document.getElementById("playerDisplay");
  computerDisplay = document.getElementById("computerDisplay");
  resultDisplay = document.getElementById("resultDisplay");
});

function playGame(playerChoice) {
  // Random choice between "rock", "paper", and "scissors" via a random number generator between 0 and 2
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  // When computer and player select the same result, display the saying "IT'S A TIE!"
  if(playerChoice === computerChoice){
    result = "IT'S A TIE!";
  }
  // Depending on the players choice between rock, paper, and scissors, display if the player won or lost
  else{
      switch(playerChoice){
          case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
            break;
          case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
            break;
          case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
            break;
      }
  }
  // Display what the player and computer chose, then return and display what the result was
  playerDisplay.textContent = 'PLAYER: ' + playerChoice;
  computerDisplay.textContent = 'COMPUTER: ' + computerChoice;
  resultDisplay.textContent = result;
}
