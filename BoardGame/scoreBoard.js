
/*var spelHistory = [
    { number: 1, user : "Player1", round: 5, result: "won" },
    { number: 2, user : "Player2", round: 3, result: "won" },
    { number: 3, user : "Player3", round: 4, result: "won" }
  ];
  
  function fillTable() {
    var tbody = document.getElementById("ScoreBoard");
  
    for (var i = 0; i < spelHistory.length; i++) {
      var row = document.createElement("tr");
  
      var numberCell = document.createElement("td");
      numberCell.textContent = spelHistory[i].number;
      row.appendChild();
  
      var UserCell = document.createElement("td");
      UserCell.textContent = spelHistory[i].user;
      row.appendChild(UserCell);
  
      var roundCell = document.createElement("td");
      roundCell.textContent = spelHistory[i].round;
      row.appendChild(roundCell);
  
      var resultCell = document.createElement("td");
      resultCell.textContent = spelHistory[i].result;
      row.appendChild(resultCell);
  
      tbody.appendChild(row);
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    fillTable();
  });
  
  */
  
// Skorları saklamak için bir nesne oluştur
let scores = {
    Player1: 0,
    Player2: 0,
  };
  
  // Skor tablosunu güncelleyen fonksiyon
  function updateScoreTable() {
    const scoreTable = document.getElementById("scoreTable");
    scoreTable.innerHTML = ""; // Tabloyu temizle
  
    // Oyuncu isimleri üzerinde dön
    for (const player in scores) {
      if (scores.hasOwnProperty(player)) {
        const scoreRow = document.createElement("div");
        scoreRow.textContent = `${player}: ${scores[player]}`;
        scoreTable.appendChild(scoreRow);
      }
    }
  }
  
  // Oyun bitiminde skorları güncelle ve tabloyu güncelle
  function updateScore() {
    if (winner === "Player1") {
      scores.Player1++;
    } else if (winner === "Player2") {
      scores.Player2++;
    }
  
    updateScoreTable();
  }
  
  // Diğer fonksiyonlar burada kalır...
  
  // Oyun başlangıcında skor tablosunu oluştur
  updateScoreTable();
  

