function playRound(score, ui, playerMove) {
  let round = new Round(playerMove)
  
  score.updateWinningScore(round.result);

  ui.displayRoundResults(round);
  ui.displayWinCounters(score);
  
  let isMatchOver = score.hasWinner();
  
  if (isMatchOver) {
	  ui.displayMatchResults(score);
	  score.reset();
  }
}

function main() {
  let score = new Score();
  let ui = new UI();
  
  ui.getRockButton().addEventListener("click", function() {
	  playRound(score, ui, "rock")});
	  
  ui.getPaperButton().addEventListener("click", function() {
	  playRound(score, ui, "paper")});
	  
  ui.getScissorsButton().addEventListener("click", function() {
	  playRound(score, ui, "scissors")});
}

main();