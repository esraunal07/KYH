  export default class EventTicket {
    constructor(id, eventName, price, eventTime, coordinatorId, availableTickets) {
      this.id = id;
      this.eventName = eventName;
      this.price = parseFloat(price.replace('$', '')); 
      this.eventTime = eventTime;
      this.coordinatorId = coordinatorId;
      this.availableTickets = parseInt(availableTickets, 10);
    }
  
    displayInfo() {
      console.log(`ID: ${this.id}, Event: ${this.eventName}, Price: ${this.price}, Time: ${this.eventTime}, Coordinator ID: ${this.coordinatorId}, Available Tickets: ${this.availableTickets}`);
    }
  }
  



