function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "ROCK";
  }
  if (randomNumber === 1) {
    return "PAPER";
  }
  if (randomNumber === 2) {
    return "SCISSORS";
  }
  console.log(randomNumber);
}

//score counters
let playerWins = 0;
let computerWins = 0;
let tieWins = 0;

//score elements
const playerCounter = document.querySelector("#player-counter");
const computerCounter = document.querySelector("#computer-counter");
const tieCounter = document.querySelector("#tie-counter");
const winnerDisplay = document.querySelector("#winner-display");

function updateScore(winner) {
  if (winner === "PLAYER") {
    playerWins++;
    playerCounter.textContent = playerWins;
  } else if (winner === "COMPUTER") {
    computerWins++;
    computerCounter.textContent = computerWins;
  } else if (winner === "TIE") {
    tieWins++;
    tieCounter.textContent = tieWins;
  }
  if (playerWins >= 5 && playerWins > computerWins) {
    winnerDisplay.textContent = "PLAYER";
  } else if (computerWins >= 5 && computerWins > playerWins) {
    winnerDisplay.textContent = "COMPUTER";
  } else if (playerWins === computerWins && playerWins >= 5) {
    winnerDisplay.textContent = "TIE";
  }
}

function playRound(playerSelection) {
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "ROCK";
    }
    if (randomNumber === 1) {
      return "PAPER";
    }
    if (randomNumber === 2) {
      return "SCISSORS";
    }
  }
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    updateScore("TIE");
    console.log("Tie!");
    return "TIE";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    updateScore("PLAYER");
    console.log("You win! Rock crushes scissors!");
    return true;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    updateScore("COMPUTER");
    console.log("You lose! Paper covers rock!");
    return false;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    updateScore("PLAYER");
    console.log("You win! Paper covers rock!");
    return true;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    updateScore("COMPUTER");
    console.log("You lose! Scissors cut paper!");
    return false;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    updateScore("PLAYER");
    console.log("You win! Scissors cut paper!");
    return true;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    updateScore("COMPUTER");
    console.log("You lose! Rock crushes scissors!");
    return false;
  } else {
    console.log("INVALID INPUT DETECTED");
    return "error";
  }
}

//player selection buttons
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function () {
  playRound("ROCK");
});
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function () {
  playRound("PAPER");
});
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", function () {
  playRound("SCISSORS");
});
