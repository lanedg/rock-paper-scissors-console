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

function playRound(humanChoice) {
  computerChoice = getComputerChoice();
  console.log(`Player choice: ${humanChoice}
Computer choice: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    roundText.textContent = "This rounds a tie.";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    roundText.textContent = "You lose this round. Paper beats rock.";
    ++computerScore;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    roundText.textContent = "You lose this round. Scissors beats paper.";
    ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    roundText.textContent = "You lose this round. Rock beats scissors.";
    ++computerScore;
  } else {
    roundText.textContent = `You win this round. ${
      humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
    } beats ${computerChoice}.`;
    ++humanScore;
  }
  updateCount();
  checkWin();
}

function updateCount() {
  humanCounter.textContent = `Human Score : ${humanScore}`;
  computerCounter.textContent = `Computer Score : ${computerScore}`;
}

function checkWin() {
  if (humanScore >= 5) {
    winText.textContent = `You win! Choose one to play again:`;
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    winText.textContent = "You lost... Choose one to play again:";
    humanScore = 0;
    computerScore = 0;
  } else {
    winText.textContent = "";
  }
}

let humanScore = 0;
let computerScore = 0;
const gameText = document.querySelector("#game-state");
const roundText = document.querySelector("#round-state");
const winText = document.querySelector("#win-text");
const rpsContainer = document.querySelector("#rps-container");
const humanCounter = document.querySelector("#human-score");
const computerCounter = document.querySelector("#computer-score");

rpsContainer.addEventListener("click", function (event) {
  let target = event.target;
  switch (target.id) {
    case "rock":
      playRound("rock");
      break;
    case "paper":
      playRound("paper");
      break;
    case "scissors":
      playRound("scissors");
      break;
  }
});
