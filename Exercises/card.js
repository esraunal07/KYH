export default class Card {
    constructor() {
      this.cardBalance = 15000;
      this.pin = '0123';
    }
  
    comparePin(pin) {
      return this.pin === pin;
    }
  
    getCardBalance() {
      return this.cardBalance;
    }
  }