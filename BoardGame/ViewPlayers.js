document.addEventListener("DOMContentLoaded", function () {
    // Sayfa yüklendiğinde çalışacak kodları buraya yazabilirsiniz.
    displayPlayerList();
  });
  
  function displayPlayerList() {
    const playerListContainer = document.getElementById("playerList");
  
    // Oyuncu listesini local storage'tan al
    const existingPlayers = JSON.parse(localStorage.getItem("players")) || {};
  
    // Her oyuncu için bir liste öğesi oluştur
    Object.keys(existingPlayers).forEach(playerName => {
      const playerItem = document.createElement("li");
      playerItem.textContent = `Player: ${playerName}, Score: ${existingPlayers[playerName].score}`;
      playerListContainer.appendChild(playerItem);
    });
  }
  
  function goToMainPage() {
    // Ana sayfaya yönlendir
    window.location.href = "main.html"; // Gitmek istediğiniz sayfanın dosya adını buraya ekleyin
  }
  