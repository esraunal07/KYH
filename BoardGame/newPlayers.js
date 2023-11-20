const playerData = JSON.parse(localStorage.getItem("players"));
document.addEventListener("DOMContentLoaded", function () {
    const playerData = JSON.parse(localStorage.getItem("players"));
  
    if (playerData) {
      Object.keys(playerData).forEach(playerName => {
        console.log(`Player: ${playerName}, Score: ${playerData[playerName].score}`);
      });
    } else {
      console.log("Player data not found.");
    }
  });
  
function addPlayer() {
    const playerNameInput = document.getElementById("playerName");
    const playerName = playerNameInput.value.trim();
  
    if (playerName !== "") {
      // Oyuncu bilgilerini local storage'a kaydet
      savePlayer(playerName);
  
      // İki oyuncu kaydedildiyse "Start Game" butonunu görünür yap
      const startGameButton = document.getElementById("startGameButton");
      startGameButton.style.display = "block";
  
      // Oyuncu listesini güncelleyerek sayfada görüntüle
      updatePlayerList();
    } else {
      alert("Please enter a valid player name.");
    }
  }
  
  function updatePlayerList() {
    
    const playerListContainer = document.getElementById("playerList");
    playerListContainer.innerHTML = ""; 
  
    const existingPlayers = JSON.parse(localStorage.getItem("players")) || {};
  
    // Her oyuncu için bir liste öğesi oluştur
        Object.keys(existingPlayers).forEach(playerName => {
        const playerItem = document.createElement("li");
        playerItem.textContent = `Player: ${playerName}, Score: ${existingPlayers[playerName].score}`;
        playerListContainer.appendChild(playerItem);
      });
    }

  
  function startGame() {
    window.location.href = "tictactoe.html";
  }
  
  function savePlayer(playerName) {
    const existingPlayers = JSON.parse(localStorage.getItem("players")) || {};

    existingPlayers[playerName] = { name: playerName, score: 0 };
    localStorage.setItem("players", JSON.stringify(existingPlayers));

    updatePlayerList();
    const savedMessage = document.getElementById("savedMessage");
    savedMessage.textContent = `Player "${playerName}" saved.`;
  }
  

  

