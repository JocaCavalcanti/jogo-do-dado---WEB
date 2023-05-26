var player1Score = 0;
var player2Score = 0;
var currentPlayer = 1;
var currentRound = 1;
var resultData = [];

function restoreGame() {
  var savedGame = localStorage.getItem("gameState");
  if (savedGame) {
    var gameState = JSON.parse(savedGame);
    Object.assign(this, gameState);
    rebuildResultTable();
    showScore();
  }
}

function saveGame() {
  var gameState = {
    player1Score,
    player2Score,
    currentPlayer,
    currentRound,
    resultData
  };
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

function playDice(player) {
  if (player === currentPlayer) {
    var diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("message").innerHTML = `Jogador ${player} jogou o dado e tirou ${diceResult}.`;
    this[`player${player}Score`] += diceResult;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    if (currentPlayer === 1) {
      currentRound++;
      showScore();
      checkWinner();
      saveRoundData();
      saveGame();
    }
  } else {
    document.getElementById("message").innerHTML = `Não é a vez do Jogador ${player}.`;
  }
}

function checkWinner() {
  if (currentPlayer === 1) {
    var winnerMsg = player1Score > player2Score ? "Jogador 1" : player1Score < player2Score ? "Jogador 2" : "Empate";
    document.getElementById("message").innerHTML += ` ${winnerMsg} venceu a rodada ${currentRound}!`;
    rebuildResultTable();
  }
}

function showScore() {
  document.getElementById("score").innerHTML = `Placar: Jogador 1 - ${player1Score} / Jogador 2 - ${player2Score}`;
}

function saveRoundData() {
  resultData.push({
    round: currentRound,
    player1Score,
    player2Score,
    winner: player1Score > player2Score ? "Jogador 1" : player1Score < player2Score ? "Jogador 2" : "Empate"
  });
}

function rebuildResultTable() {
  var resultTable = document.getElementById("result-table");
  resultTable.innerHTML = "<tr><th>Rodada</th><th>Jogador 1</th><th>Jogador 2</th><th>Vencedor</th></tr>";

  resultData.forEach(function(data) {
    var newRow = resultTable.insertRow(-1);
    newRow.innerHTML = `<td>${data.round}</td><td>${data.player1Score}</td><td>${data.player2Score}</td><td>${data.winner}</td>`;
  });
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1;
  currentRound = 1;
  resultData = [];
  showScore();
  document.getElementById("message").innerHTML = "";
  resetTable();
  saveGame();
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1;
  currentRound = 1;
  resultData = [];
  showScore();
  document.getElementById("message").innerHTML = "";
  resetTable();
  saveGame();
}

function resetTable() {
  var resultTable = document.getElementById("result-table");
  resultTable.innerHTML = "<tr><th>Rodada</th><th>Jogador 1</th><th>Jogador 2</th><th>Vencedor</th></tr>";
}

