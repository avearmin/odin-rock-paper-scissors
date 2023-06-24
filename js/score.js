class Score {
  #player;
  #computer;
  
  constructor() {
    this.#player = 0;
    this.#computer = 0;
  }
  
  getPlayer() {
    return this.#player;
  }
  
  getComputer() {
    return this.#computer;
  }
  
  updateWinningScore(roundResult) {
    if (roundResult === "Player wins") {
        this.#player++;
    } else if (roundResult === "Computer wins") {
        this.#computer++;
    }
  }
  
  reset() {
    this.#player = 0;
    this.#computer = 0;
  }
  
  hasWinner() {
    return this.#player === 5 || this.#computer === 5;
  }
  
  getCurrentLead() {
    let lead = "player";
    if (this.#computer > this.#player) {
      lead = "computer";
    }
    return lead;
  }
  
}