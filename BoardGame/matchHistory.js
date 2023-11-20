document.addEventListener('DOMContentLoaded', function () {
  const matchHistory = document.getElementById('matchHistory');
  const selectedPlayersDiv = document.getElementById('selectedPlayers');
  const storedMatchHistoryData = localStorage.getItem('matchHistoryData');
  const matchHistoryData = storedMatchHistoryData ? JSON.parse(storedMatchHistoryData) : [];

  console.log("Match History Data:", storedMatchHistoryData);

  const playerXName = localStorage.getItem('playerXName') || 'DefaultPlayer1';
  const playerOName = localStorage.getItem('playerOName') || 'DefaultPlayer2';
  selectedPlayersDiv.innerHTML = `<p>${playerXName} vs ${playerOName}</p>`;

  matchHistoryData.forEach((match) => {
    const newRow = document.createElement('tr');
    const winnerCell = document.createElement('td');
    const opponentCell = document.createElement('td');
    const roundCountCell = document.createElement('td');
    const resultCell = document.createElement('td');

    winnerCell.textContent = match.winner;
    opponentCell.textContent = match.opponent;
    roundCountCell.textContent = match.roundCount;
    resultCell.textContent = match.result;

    newRow.appendChild(winnerCell);
    newRow.appendChild(opponentCell);
    newRow.appendChild(roundCountCell);
    newRow.appendChild(resultCell);

    matchHistory.appendChild(newRow);
  });
});
