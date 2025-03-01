function getComputerChoice() {
  let randChoice = Math.floor(Math.random() * 3) + 1;
  if (randChoice === 1) {
    return "rock";
  } else if (randChoice === 2) {
    return "paper";
  } else if (randChoice === 3) {
    return "scissors";
  } else {
    return "error";
  }
}

function getHumanChoice() {
  let humanChoice;
  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    humanChoice = prompt("Rock, Paper, or Scissors: ");
    humanChoice = humanChoice.toLowerCase();
  }
  return humanChoice;
}

function playRound() {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  console.log(`Player choice: ${humanChoice}
Computer choice: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log(`This rounds a tie.`);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose this round. Paper beats rock.");
    ++computerScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose this round. Scissors beats paper.");
    ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose this round. Rock beats scissors.");
    ++computerScore;
  } else {
    console.log(
      `You win this round. ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}.`
    );
    ++humanScore;
  }
  console.log("\n\n");
}

function playGame(playRound) {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (humanScore === computerScore) {
    console.log("Game over.\nIt's a draw......");
  } else if (humanScore > computerScore) {
    console.log("Game over.\nYour the winner!");
  } else {
    console.log("Game over.\nYou lose......");
  }
}

let humanScore = 0;
let computerScore = 0;
playGame(playRound);
