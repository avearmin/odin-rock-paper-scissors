class UI {
  #rockButton;
  #paperButton;
  #scissorsButton;
  #results;
  #playerScore;
  #computerScore;
    
  constructor() {
    this.#rockButton = document.getElementById("rock-button");
    this.#paperButton = document.getElementById("paper-button");
    this.#scissorsButton = document.getElementById("scissors-button");
    this.#results = document.getElementById("results-display");
    this.#playerScore = document.getElementById("player-score");
    this.#computerScore = document.getElementById("computer-score");
  }
  
  getRockButton() {
    return this.#rockButton;
  }
  
  getPaperButton() {
    return this.#paperButton;
  }
  
  getScissorsButton() {
    return this.#scissorsButton;
  }
  
  displayRoundResults(round) {
    this.#results.textContent = `Player picks ${round.playerMove}, Computer picks ${round.computerMove}: ${round.result}`
  }

  displayWinCounters(score) {
    this.#playerScore.textContent = `Player Wins: ${score.getPlayer()}`;
    this.#computerScore.textContent = `Computer Wins: ${score.getComputer()}`;
  }

  displayMatchResults(score) {
    score.getPlayer() > score.getComputer() ? this.#results.textContent = "The Player Wins! Select a new move to begin the game again."
    : this.#results.textContent = "The Computer Wins! Select a new move to begin the game again.";
  }
  
}