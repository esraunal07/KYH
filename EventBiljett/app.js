import promptSync from 'prompt-sync';
import fs from 'fs';
import EventTicket from './eventticket.js';
import User from './user.js';

const prompt = promptSync();

class TicketApp {
  constructor() {
    this.users = [];
    this.tickets = [];

    this.loadFromFiles();
    this.showMainMenu();
  }

  loadFromFiles() {
    try {
      const usersData = fs.readFileSync('usersData.json', 'utf8');
      this.users = JSON.parse(usersData).map(userData => new User(userData.username, userData.password, userData.email, userData.id, userData.tickets));

      const ticketsData = fs.readFileSync('ticketsData.json', 'utf8');
      this.tickets = JSON.parse(ticketsData).map(ticketData => new EventTicket(ticketData.eventName, ticketData.availableTickets));
    } catch (error) {
      this.saveToFiles();
    }
  }

  saveToFiles() {
    
    fs.writeFileSync('usersData.json', JSON.stringify(this.users), 'utf8');
    fs.writeFileSync('ticketsData.json', JSON.stringify(this.tickets), 'utf8');
  }

  showMainMenu() {
    console.log('Welcome! Please choose an option:');
    console.log('1. Create New Account');
    console.log('2. Buyer Login');
    console.log('3. Admin Login');
    console.log('4. Checkout');
  
    const choice = parseInt(prompt('Enter your choice(1-4): '), 10);
    console.log(`Your choice: ${choice}`); 
  
    switch (choice) {
      case 1:
        this.createAccount();
        this.showMainMenu();
        break;
      case 2:
        this.userLogin();
        break;
      case 3:
        this.adminLogin();
        break;
      case 4:
        console.log('Check outing...');
        break;
      default:
        console.log('Invalid option. Try again.');
        this.showMainMenu();
    }
  }
  
  createAccount() {
    const username = prompt('Enter username: ');
    const password = prompt('Enter password: ');
    const email = prompt('Enter email: ');
    const id = prompt('Enter ID: ');
    const phone=prompt('Telephone: ');

    const newUser = new User(username, password, email, id);
    this.users.push(newUser);
    console.log('New account created!');
    this.saveToFiles();
    this.showMainMenu();
  }

  userLogin() {
    const username = prompt('Enter username: ');
    const password = prompt('Enter password: ');
  
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      console.log('Login successful. Welcome, ' + user.username + '!');
      this.showMainMenu(user);
    } else {
      console.log('Wrong username or password. Try again!');
      console.log('Registered Users:', this.users);
      this.showMainMenu();
    }
  }
  
  showMainMenu(user) {
    if (user) {
      console.log(`Welcome, ${user.username}!`);
      const choice = prompt('Please select an option: (1) Buy Ticket,  (2) Add New Event, (3) Check Out\n');
  
      switch (choice) {
        case '1':
          this.buyTicket(user);
          this.showMainMenu(user); 
          break;
        case '2':
          this.addNewEvent(user);
          this.showMainMenu(user);
          break; 
        case '3':
          console.log('Checking out...');
          break;
        default:
          console.log('Invalid option. Try again!');
          this.showMainMenu(user);
      }
     } else {
      console.log('Welcome! Please choose an option:');
      console.log('1. Create New Account');
      console.log('2. Buyer Login');
      console.log('3. Admin Login');
      console.log('4. Checkout');
  
    const choice = parseInt(prompt('Enter your choice (1-4): '), 10);
    console.log(`Your choice: ${choice}`); 
  
    switch (choice) {
      case 1:
        this.createAccount();
        this.showMainMenu();
        break;
      case 2:
        this.userLogin();
        break;
      case 3:
        this.adminLogin();
        break;
      case 4:
        console.log('Exiting...');
        break;
      default:
        console.log('Invalid option. Try again!.');
        this.showMainMenu();
    }
      
     }
    }
    addNewEvent(user) {
      console.log('Enter details for the new event:');
      const eventName = prompt('Event Name: ');
      const eventDate = prompt('Event Date: ');
    
      if (!user.hasOwnProperty('events')) {
        user.tickets = [];
      }
      const newEvent = { name: eventName, date: eventDate };
      user.tickets.push(newEvent);
      this.saveUserData(user);
    
      console.log('New event added successfully!');
    }
    saveUserData(user) {
      const userDataPath = 'ticketsData.json';
      let ticketData = {};
      try {
        const data = fs.readFileSync(userDataPath, 'utf8');
        ticketData = JSON.parse(data);
      } catch (err) {
        ticketData = {};
      }
      if (user && user.username) {
        if (!ticketData[user.username]) {
          ticketData[user.username] = { events: [] };
        }
        ticketData[user.username].events.push(...user.events);
      }
  
      fs.writeFileSync(userDataPath, JSON.stringify(ticketData, null, 2));
    }
    
   
  buyTicket(user) {
    this.showEventTickets();
    const eventName = prompt('Enter the event name: ');
    const quantity = parseInt(prompt('How many tickets do you want to buy: '), 10);

    const event = this.tickets.find(ticket => ticket.eventName === eventName);
    if (event && event.availableTickets >= quantity) {
      this.tickets;
      user.buyTicket(event, quantity);
      event.availableTickets -= quantity;
      this.saveToFiles();
    } else {
      console.log('The specified event could not be found or there are not enough tickets. Try again!');
    }
    this.showMainMenu(user);
  }


  adminLogin() {
    const adminUsername = prompt('Admin UserName: ');
    const adminPassword = prompt('Admin Password: ');

    if (adminUsername === 'admin' && adminPassword === 'admin123') {

      console.log('Admin login successful!');
      this.showAdminMenu();
    } else {
      console.log('Incorrect admin username or password. Try again!');
      this.showMainMenu();
    }
  }

  showAdminMenu() {
    console.log('--- Admin Menu ---');
    const adminChoice = prompt('Admin Page: Please select an option: (1) View Users, (2) View Event Tickets, (3) Exit\n');

    switch (adminChoice) {
      case '1':
        this.showUsers();
        break;
      case '2':
        this.showEventTickets();
        break;
      case '3':
        console.log('Exiting...');
        break;
      default:
        console.log('Invalid option. Try again!');
        this.showAdminMenu();
    }
  }


  showUsers() {
    console.log('--- Users ---');
    this.users.forEach(user => {
      console.log(`ID: ${user.id}, User Name: ${user.username}, Email: ${user.email}, Telefon: ${user.phone}`);
    });
    console.log('---------------------');
    this.showAdminMenu();
  }

  showEventTickets() {
    console.log('--- Event Ticket ---');
    this.tickets.forEach(tickets => {
      console.log(`ID: ${tickets.id}, Event Name: ${tickets.eventName}, Prise: ${tickets.price}, Time: ${tickets.eventTime}, Coordinator ID: ${tickets.coordinatorId}, Stok: ${tickets.availableTickets}`);
    
    });
    //console.log('--');
   // this.showAdminMenu();
  }
}
    

const app = new TicketApp();

  