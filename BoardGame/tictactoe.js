const X = 'x';
const O = 'o';
const winningCombination = [
  // row
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // col
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diag
  [0, 4, 8],
  [2, 4, 6]
];

let rounds = 1;
let whoTurn;
let markArray = [];
let playerXName = "DefaultPlayer1";
let playerOName = "DefaultPlayer2";
let matchHistoryData = [];  
const storedPlayerXName = localStorage.getItem('playerXName');
const storedPlayerOName = localStorage.getItem('playerOName');

if (storedPlayerXName) {
  playerXName = storedPlayerXName;
}

if (storedPlayerOName) {
  playerOName = storedPlayerOName;
}

localStorage.setItem('playerXName', playerXName);
console.log("Player X Name:", playerXName);
localStorage.setItem('playerOName', playerOName);
console.log("Player O Name:", playerOName);

const roundText = document.getElementById('round-text');
const cellElements = document.querySelectorAll('[data-cell]');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const resetButton = document.getElementById('restart-button');

resetButton.addEventListener('click', startGame);

function startGame() {
  whoTurn = false;
  markArray = [];
  cellElements.forEach(cell => {
    cell.classList.remove(X);
    cell.classList.remove(O);
    cell.innerText = '';
    cell.removeEventListener('click', onClick);
    cell.addEventListener('click', onClick);
  });
  roundText.innerHTML = `Round: ${rounds}`;
  winningMessageTextElement.innerText = '';
  rounds++;
  if (rounds > 3) {
    rounds = 1;
  }
}

function onClick(e) {
  const cell = e.target;
  const currentClass = whoTurn ? O : X;
  if (checkCellEmpty(cell) && !checkWin(currentClass)) {
    cell.innerText = whoTurn ? O : X;
    placeMarke(cell, currentClass);
  }
}

function checkCellEmpty(cell) {
  if (cell.classList.contains("x") || cell.classList.contains("o")) {
    return false;
  }
  return true;
}

function endGame() {
  winningMessageTextElement.innerText = `${whoTurn ? playerOName : playerXName} Wins!`;
  showSelectedPlayers();
  matchHistoryData.push({
    winner: whoTurn ? playerOName : playerXName,
    opponent: whoTurn ? playerXName : playerOName,
    roundCount: rounds - 1,
    result: whoTurn ? "O Wins" : "X Wins" 
  });

  localStorage.setItem('matchHistoryData', JSON.stringify(matchHistoryData));
}

function showSelectedPlayers() {
  const selectedPlayersDiv = document.getElementById('selectedPlayers');
  selectedPlayersDiv.innerHTML = `<p>${playerXName} vs ${playerOName}</p>`;
}

function placeMarke(cell, currentClass) {
  markArray.push(cell);
  cell.classList.add(currentClass);
  if (checkWin(currentClass)) {
    endGame();
  } else {
    if (markArray.length === 9) {
      winningMessageTextElement.innerText = 'Tie!';
    }
    swapTurns();
  }
}

function swapTurns() {
  whoTurn = !whoTurn;
}

function checkWin(currentClass) {
  return winningCombination.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}

startGame();
