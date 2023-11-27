export default class User {
  constructor(id, username, password, email, phone) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.tickets = [];
  }

  buyTicket(event, quantity) {
    // Bilet satın alma işlemi
    this.tickets.push({ event, quantity });
    console.log(`Bilet satın alma işlemi başarılı: ${quantity} adet bilet alındı for ${event}`);
  }
}


  