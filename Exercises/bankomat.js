    export default class Bankomat {
    constructor() {
      this.cardInserted = false;
      this.validCard = false;
      this.machineBalance = 11000;
      this.currentCard = null;
    }
  
    insertCard(card) {
      if (!this.cardInserted) {
        this.cardInserted = true;
        this.currentCard = card;
        console.log('Kart alındı.');
      } else {
        console.log('Başka bir kart zaten mevcut.');
      }
    }
  
    enterPin(pin) {
      if (this.cardInserted) {
        if (this.currentCard.comparePin(pin)) {
          this.validCard = true;
          console.log('PIN doğru.');
        } else {
          console.log('PIN yanlış.');
        }
      } else {
        console.log('Kart bulunamadı.');
      }
    }
  
    withdrawMoney(amount) {
      if (this.cardInserted && this.validCard) {
        if (amount <= this.currentCard.getCardBalance() && amount <= this.machineBalance) {
          this.currentCard.cardBalance -= amount;
          this.machineBalance -= amount;
          console.log(`${amount} TL çekildi. Yeni kart bakiyesi: ${this.currentCard.getCardBalance()} TL`);
        } else {
          console.log('Yetersiz bakiye veya banka tarafından sınırlı işlem.');
        }
      } else {
        console.log('Kart bulunamadı veya geçersiz kart.');
      }
    }
  
    getBalance() {
      if (this.cardInserted && this.validCard) {
        console.log(`Kart bakiyesi: ${this.currentCard.getCardBalance()} TL`);
      } else {
        console.log('Kart bulunamadı veya geçersiz kart.');
      }
    }
  
    ejectCard() {
      if (this.cardInserted) {
        console.log('Kart iade edildi.');
        this.cardInserted = false;
        this.validCard = false;
        this.currentCard = null;
      } else {
        console.log('Kart bulunamadı.');
      }
    }
  }
  

  