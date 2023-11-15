
var spelHistory = [
    { number: 1, user : "Player1", round: 5, result: "won" },
    { number: 2, user : "Player2", round: 3, result: "won" },
    { number: 3, user : "Player3", round: 4, result: "won" }
  ];
  
  function fillTable() {
    var tbody = document.getElementById("ToppLista");
  
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
  