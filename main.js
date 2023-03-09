function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function getComputerChoice() {
    let computerChoice = getRandomInt(2);
    return computerChoice === 0 ? "rock"
    : computerChoice === 1 ? "paper"
    : "scissors";
}

function validatePlayerChoice() {
    while (true) {
        let playerChoice = prompt("Choose: rock, paper, scissors").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice == "scissors") {
            return playerChoice;
        }
    }
}

function playRound(playerMove, computerMove) {
    return playerMove === computerMove ? "Tie"
    : playerMove === "rock" && computerMove === "scissors" ? "Player wins"
    : playerMove === "scissors" && computerMove === "paper" ? "Player wins"
    : playerMove === "paper" && computerMove === "rock" ? "Player wins"
    : "Computer wins";
}

function game() {
    let playerWinCounter = 0;
    let computerWinCounter = 0;

    let playerMove = validatePlayerChoice();
    let computerMove = getComputerChoice();
    let roundResults = playRound(playerMove, computerMove);
    console.log(`Player picks ${playerMove}, Computer picks ${computerMove}: ${roundResults}`);

    roundResults === "Player wins" ? playerWinCounter++ : computerWinCounter++;
    console.log(`Player wins: ${playerWinCounter} Computer wins: ${computerWinCounter}`);
    }
    if (playerWinCounter > computerWinCounter) {
        console.log("Player wins the game");
    } else if (playerWinCounter < computerWinCounter) {
        console.log("Computer wins the game");
    } else {
        console.log("It's a tie game");
    }
}

game();