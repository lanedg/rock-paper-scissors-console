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

function getHumanChoice() {}
