class Round {
  possibleMoves;
  playerMove;
  computerMove;
  result;
  
  constructor(playerMove) {
    this.possibleMoves = ["rock", "paper", "scissors"];
    this.playerMove = playerMove;
    this.computerMove = this.setComputerMove();
    this.result = this.getRoundWinner();
  }
  
  setComputerMove() {
    return this.possibleMoves[this.#getRandomInt(2)];
  }
  
  #getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
  getRoundWinner() {
    return this.playerMove === this.computerMove ? "Tie"
    : this.playerMove === "rock" && this.computerMove === "scissors" ? "Player wins"
    : this.playerMove === "scissors" && this.computerMove === "paper" ? "Player wins"
    : this.playerMove === "paper" && this.computerMove === "rock" ? "Player wins"
    : "Computer wins";
  }
  
}