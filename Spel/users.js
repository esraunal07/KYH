const playerArray = [];

document.addEventListener('DOMContentLoaded', () => {
  const registerButton = document.getElementById('register');

  if (registerButton) {
    registerButton.addEventListener('click', register);
  } else {
    console.error("Error: 'register' button not found.");
  }
});

function register() {
  fetchData();
  const newPlayerName = document.getElementById('player-name').value;

  if (checkForNameExist(newPlayerName)) {
    alert("Player already exists");
  } else {
    const player = new NewPlayer(newPlayerName);
    playerArray.push(player.dataInfo());
    writeToLocalStorage();
  }
}

function fetchData() {
  const localStorageData = localStorage.getItem('toppLista');
  if (localStorageData) {
    playerArray.push(...JSON.parse(localStorageData));
  }
}

function checkForNameExist(name) {
  return playerArray.some(x => x.playerName === name);
}

function writeToLocalStorage() {
  localStorage.setItem('toppLista', JSON.stringify(playerArray));
}

class NewPlayer {
  constructor(name) {
    this.name = name;
  }

  dataInfo() {
    return {
      playerName: this.name,
      won: 0,
      loses: 0,
      games: []
    };
  }
}
