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
]
const roundText = document.getElementById('round-text')
const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageElement = document.getElementById('winning-message')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const resetButton = document.getElementById('restart-button')
let rounds = 1;
let whoTurn;
let markArray = [];

startGame();

resetButton.addEventListener('click', startGame)

function startGame() {

  whoTurn = false
  markArray = [];
  cellElements.forEach(cell => {
    cell.classList.remove(X)
    cell.classList.remove(O)
    cell.innerText = ''
    cell.removeEventListener('click', onClick)
    cell.addEventListener('click', onClick)
  })
  roundText.innerHTML = `Round: ${rounds}`
  winningMessageTextElement.innerText = ''
  rounds++
  if (rounds > 3) {
    rounds = 1
  }
}

function onClick(e) {
  const cell = e.target
  const currentClass = whoTurn ? O : X;
  if (checkCellEmpty(cell) && !checkWin(currentClass)) {
    cell.innerText = whoTurn ? O : X
    placeMarke(cell, currentClass)
  }
}

function checkCellEmpty(cell) {
  if (cell.classList.contains("x") || cell.classList.contains("o")) {
    return false
  }
  return true
}

function endGame() {
  winningMessageTextElement.innerText = `${whoTurn ? "O" : "X"} Wins!`
}

function placeMarke(cell, currentClass) {
  markArray.push(cell)
  cell.classList.add(currentClass);
  if (checkWin(currentClass)) {
    endGame()
  } else {
    if (markArray.length === 9) {
      winningMessageTextElement.innerText = 'Tie!'
    }
    swapTurns()
  }
}

function swapTurns() {
  whoTurn = !whoTurn
}

function checkWin(currentClass) {
  return winningCombination.some(cobination => {
    return cobination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
