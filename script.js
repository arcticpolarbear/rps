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

function playRound(playerSelection, computerSelection) {
  const playerUpperCase = playerSelection.toUpperCase();
  const computerUpperCase = computerSelection.toUpperCase();
  if (playerUpperCase === computerUpperCase) {
    console.log("Tie!");
    return "TIE";
  } else if (playerUpperCase === "ROCK" && computerUpperCase === "SCISSORS") {
    console.log("You win! Rock crushes scissors!");
    return true;
  } else if (playerUpperCase === "ROCK" && computerUpperCase === "PAPER") {
    console.log("You lose! Paper covers rock!");
    return false;
  } else if (playerUpperCase === "PAPER" && computerUpperCase === "ROCK") {
    console.log("You win! Paper covers rock!");
    return true;
  } else if (playerUpperCase === "PAPER" && computerUpperCase === "SCISSORS") {
    console.log("You lose! Scissors cut paper!");
    return false;
  } else if (playerUpperCase === "SCISSORS" && computerUpperCase === "PAPER") {
    console.log("You win! Scissors cut paper!");
    return true;
  } else if (playerUpperCase === "SCISSORS" && computerUpperCase === "ROCK") {
    console.log("You lose! Rock crushes scissors!");
    return false;
  } else {
    console.log("INVALID INPUT DETECTED");
    return "error";
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let playerParameter = "";
  let computerParameter = "";
  let roundResult = true;
  for (let i = 0; i < 5; i++) {
    playerParameter = prompt("Rock, Paper or Scissors?");
    computerParameter = getComputerChoice();
    console.log(
      "player choice " +
        playerParameter +
        "computer choice " +
        computerParameter
    );
    roundResult = playRound(playerParameter, computerParameter);
    if (roundResult === true) {
      playerWins += 1;
    } else if (roundResult === false) {
      computerWins += 1;
    } else if (roundResult === "TIE") {
      continue;
    }
  }
  console.log("playerWins = " + playerWins);
  console.log("computerWins = " + computerWins);
  if (playerWins > computerWins) {
    return "playerWinner";
  } else if (computerWins > playerWins) {
    return "computerWinner";
  } else if (playerWins === computerWins) {
    return "tieWinner";
  }
}

//tests
//console.log(playRound("ROCK", "SCISSORS"));
console.log(game());
