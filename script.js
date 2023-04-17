var player1Score = 0;
		var player2Score = 0;
		var currentPlayer = 1;
		var currentRound = 1;
        function playDice(player) {
		if (currentRound <= 10) {
			if (player === currentPlayer) {
				var diceResult = Math.floor(Math.random() * 6) + 1;
				document.getElementById("message").innerHTML = "Jogador " + player + " jogou o dado e tirou " + diceResult + ".";
				if (player === 1) {
					player1Score += diceResult;
				} else {
					player2Score += diceResult;
				}
				currentPlayer = (currentPlayer === 1) ? 2 : 1;
				if (currentPlayer === 1) {
					currentRound++;
					showScore();
					checkWinner();
				}
			} else {
				document.getElementById("message").innerHTML = "Não é a vez do Jogador " + player + ".";
			}
		}
	}

	function checkWinner() {
		if (currentRound <= 10) {
			if (currentPlayer === 1) {
				if (player1Score > player2Score) {
					document.getElementById("message").innerHTML += " Jogador 1 venceu a rodada " + currentRound + "!";
				} else if (player1Score < player2Score) {
					document.getElementById("message").innerHTML += " Jogador 2 venceu a rodada " + currentRound + "!";
				} else {
					document.getElementById("message").innerHTML += " Empate na rodada " + currentRound + "!";
				}
			}
		}
	}

	function showScore() {
		document.getElementById("score").innerHTML = "Placar: Jogador 1 - " + player1Score + " / Jogador 2 - " + player2Score;
	}

    function updateResultTable() {
  var resultTable = document.getElementById("result-table");
  var newRow = resultTable.insertRow(-1);
  var roundCell = newRow.insertCell(0);
  var player1Cell = newRow.insertCell(1);
  var player2Cell = newRow.insertCell(2);
  var winnerCell = newRow.insertCell(3);

  roundCell.innerHTML = currentRound;
  player1Cell.innerHTML = player1Score;
  player2Cell.innerHTML = player2Score;

  if (player1Score > player2Score) {
    winnerCell.innerHTML = "Jogador 1";
  } else if (player1Score < player2Score) {
    winnerCell.innerHTML = "Jogador 2";
  } else {
    winnerCell.innerHTML = "Empate";
  }
}

function checkWinner() {
    if (currentRound <= 10) {
      if (currentPlayer === 1) {
        if (player1Score > player2Score) {
          document.getElementById("message").innerHTML += " Jogador 1 venceu a rodada " + currentRound + "!";
        } else if (player1Score < player2Score) {
          document.getElementById("message").innerHTML += " Jogador 2 venceu a rodada " + currentRound + "!";
        } else {
          document.getElementById("message").innerHTML += " Empate na rodada " + currentRound + "!";
        }
        updateResultTable();
      }
    }
  }
  function reiniciar() {
    var table = document.getElementById("tabela");
    table.innerHTML = "";
}
  
	function resetGame() {
		player1Score = 0;
		player2Score = 0;
		currentPlayer = 1;
		currentRound = 1;
		showScore();
		document.getElementById("message").innerHTML = "";
	}
	showScore();