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
  let humanChoice = prompt("Rock, Paper, or Scissors: ");
  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  console.log(computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);
