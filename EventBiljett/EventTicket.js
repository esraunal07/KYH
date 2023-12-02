  export default class EventTicket {
    constructor(eventId, eventName, price, eventTime, buyerId) {
      this.eventId = eventId;
      this.eventName = eventName;
      this.price = price; 
      this.eventTime = eventTime;
      this.buyerId = buyerId;
  
    }
  
    displayInfo() {
      console.log(`ID: ${this.eventId}, Event: ${this.eventName}, Price: ${this.price}, Time: ${this.eventTime}, Buyer ID: ${this.buyerId}`);
    }
  }
  



