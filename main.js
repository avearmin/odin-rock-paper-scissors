function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getComputerChoice() {
    let computerChoice = getRandomInt(2);
    return computerChoice === 0 ? "rock" : computerChoice === 1 ? "paper" : "scissors";
}

function validatePlayerChoice() {
    while (true) {
        let playerChoice = prompt("Choose: rock, paper, scissors").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
    }
}

function determineRoundWinner(playerMove, computerMove) {
    return playerMove === computerMove ? "Tie"
    : playerMove === "rock" && computerMove === "scissors" ? "Player wins"
    : playerMove === "scissors" && computerMove === "paper" ? "Player wins"
    : playerMove === "paper" && computerMove === "rock" ? "Player wins"
    : "Computer wins";
}

function displayRoundResults(playerMove, computerMove, roundResults) {
    let results = document.getElementById("results-display");
    results.textContent = `Player picks ${playerMove}, Computer picks ${computerMove}: ${roundResults}`
}

function displayWinCounters(counter1, counter2) {
    let playerScore = document.getElementById("player-score");
    let computerScore = document.getElementById("computer-score");
    playerScore.textContent = `Player Wins: ${counter1}`;
    computerScore.textContent = `Computer Wins: ${counter2}`;
}

function checkForMatchWinner(playerWinCounter, computerWinCounter) {
    return (playerWinCounter === 5) || (computerWinCounter === 5);
}

function displayMatchResults(playerWinCounter, computerWinCounter) {
    let results = document.getElementById("results-display");
    playerWinCounter > computerWinCounter ? results.textContent = "The Player Wins!"
    : results.textContent = "The Computer Wins!";
}

function game() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;

    let playerMove = validatePlayerChoice();
    let computerMove = getComputerChoice();
    let roundResults = playRound(playerMove, computerMove);
    roundResults === "Player wins" ? playerWinCounter++ : computerWinCounter++;
    let isMatchOver = checkForMatchWinner(playerWinCounter, computerWinCounter);

    displayRoundResults(playerMove, computerMove, roundResults);
    displayWinCounters(playerWinCounter, computerWinCounter);
    if (isMatchOver === true) displayMatchResults(playerWinCounter, computerWinCounter);
}

game();