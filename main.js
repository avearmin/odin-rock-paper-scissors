function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getComputerChoice() {
    let computerChoice = getRandomInt(2);
    return computerChoice === 0 ? "rock"
    : computerChoice === 1 ? "paper"
    : "scissors";
}

function playRound(playerMove, computerMove) {
    return playerMove === computerMove ? "tie"
    : playerMove === "rock" && computerMove === "scissors" ? "player wins"
    : playerMove === "scissors" && computerMove === "paper" ? "player wins"
    : playerMove === "paper" && computerMove === "rock" ? "player wins"
    : "computer wins";
}