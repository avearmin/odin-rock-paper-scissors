let playerWinCounter = 0;
let computerWinCounter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getComputerChoice() {
    const computerChoice = getRandomInt(2);
    return computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
}

function determineRoundWinner(playerMove, computerMove) {
    return playerMove === computerMove ? "Tie"
    : playerMove === "rock" && computerMove === "scissors" ? "Player wins"
    : playerMove === "scissors" && computerMove === "paper" ? "Player wins"
    : playerMove === "paper" && computerMove === "rock" ? "Player wins"
    : "Computer wins";
}

function displayRoundResults(playerMove, computerMove, roundResults) {
    const results = document.getElementById("results-display");
    results.textContent = `Player picks ${playerMove}, Computer picks ${computerMove}: ${roundResults}`
}

function displayWinCounters(counter1, counter2) {
    const playerScore = document.getElementById("player-score");
    const computerScore = document.getElementById("computer-score");
    playerScore.textContent = `Player Wins: ${counter1}`;
    computerScore.textContent = `Computer Wins: ${counter2}`;
}

function checkForMatchWinner(playerWinCounter, computerWinCounter) {
    return (playerWinCounter === 5) || (computerWinCounter === 5);
}

function displayMatchResults(playerWinCounter, computerWinCounter) {
    const results = document.getElementById("results-display");
    playerWinCounter > computerWinCounter ? results.textContent = "The Player Wins!"
    : results.textContent = "The Computer Wins!";
}

function playRound(playerMove) {
    const computerMove = getComputerChoice();
    const roundResults = determineRoundWinner(playerMove, computerMove);
    roundResults === "Player wins" ? playerWinCounter++ : computerWinCounter++;
    const isMatchOver = checkForMatchWinner(playerWinCounter, computerWinCounter);

    displayRoundResults(playerMove, computerMove, roundResults);
    displayWinCounters(playerWinCounter, computerWinCounter);
    if (isMatchOver) {
	    displayMatchResults(playerWinCounter, computerWinCounter);
	    playerWinCounter = 0;
        computerWinCounter = 0;
    }
}

function game() {
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");
    
    rockButton.addEventListener("click", function() {
	playRound("rock")});
    paperButton.addEventListener("click", function() {
	playRound("paper")});
    scissorsButton.addEventListener("click", function() {
	playRound("scissors")});
}

game();