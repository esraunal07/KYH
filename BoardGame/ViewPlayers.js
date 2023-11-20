document.addEventListener('DOMContentLoaded', function () {
  const playerList = document.getElementById('playerList');

  const storedPlayerXName = localStorage.getItem('playerXName');
  const storedPlayerOName = localStorage.getItem('playerOName');

  if (storedPlayerXName) {
    addPlayerToList(storedPlayerXName);
  }

  if (storedPlayerOName) {
    addPlayerToList(storedPlayerOName);
  }
});

function addPlayerToList(playerName) {
  const playerList = document.getElementById('playerList');
  const listItem = document.createElement('li');
  listItem.textContent = playerName;
  playerList.appendChild(listItem);
}
