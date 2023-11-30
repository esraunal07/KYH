export default class EventTicket {

  constructor(id, eventName, price, eventTime, coordinatorId) {
    this.id = id;
    this.eventName = eventName;
    this.price = price;
    this.eventTime = eventTime;
    this.coordinatorId = coordinatorId;
  }

  displayInfo() {
    console.log(`ID: ${this.id}, Event: ${this.eventName}, Price: ${this.price}, Time: ${this.eventTime}, Coordinator ID: ${this.coordinatorId}`);
  }
}



