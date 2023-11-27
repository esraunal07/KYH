import promptSync from 'prompt-sync';
import fs from 'fs';
import EventTicket from './EventTicket.js';
import User from './User.js';

const prompt = promptSync();

class TicketApp {
  constructor() {
    this.users = [];
    this.tickets = [];

    // Program başlatıldığında JSON dosyalarını kontrol et
    this.loadFromFiles();

    // Ana menüyü göster
    this.showMainMenu();
  }

  loadFromFiles() {
    // Kullanıcıları ve etkinlik biletlerini JSON dosyalarından yükle
    try {
      const usersData = fs.readFileSync('usersData.json', 'utf8');
      this.users = JSON.parse(usersData).map(userData => new User(userData.username, userData.password, userData.tickets));

      const ticketsData = fs.readFileSync('ticketsData.json', 'utf8');
      this.tickets = JSON.parse(ticketsData).map(ticketData => new EventTicket(ticketData.eventName, ticketData.availableTickets));
    } catch (error) {
      // Hata durumunda dosyaları oluştur
      this.saveToFiles();
    }
  }

  saveToFiles() {
    // Kullanıcıları ve etkinlik biletlerini JSON dosyalarına kaydet
    fs.writeFileSync('usersData.json', JSON.stringify(this.users), 'utf8');
    fs.writeFileSync('ticketsData.json', JSON.stringify(this.tickets), 'utf8');
  }

  showMainMenu() {
    console.log('Hoş geldiniz! Lütfen bir seçenek seçin:');
    console.log('1. Yeni Hesap Oluştur');
    console.log('2. Alıcı Girişi');
    console.log('3. Yönetici Girişi');
    console.log('4. Çıkış');
  
    const choice = parseInt(prompt('Seçeneğinizi girin (1-4): '), 10);
    console.log(`Seçilen sayı: ${choice}`); // Kullanıcının girdiği sayıyı ekrana yazdır
  
    switch (choice) {
      case 1:
        this.createAccount();
        this.showMainMenu();
        break;
      case 2:
        this.userLogin();
        this.showMainMenu();
        break;
      case 3:
        this.adminLogin();
        this.showMainMenu();
        break;
      case 4:
        console.log('Çıkılıyor...');
        break;
      default:
        console.log('Geçersiz seçenek. Tekrar deneyin.');
        this.showMainMenu();
    }
  }
  
  
  createAccount() {
    // Yeni kullanıcı hesabı oluştur
    const username = prompt('Kullanıcı adınızı girin: ');
    const password = prompt('Şifrenizi girin: ');

    const newUser = new User(username, password);
    this.users.push(newUser);
    console.log('Yeni hesap oluşturuldu!');
    this.saveToFiles();
    this.showMainMenu();
  }

  userLogin() {
    // Alıcı girişi yap
    const username = prompt('Kullanıcı adınızı girin: ');
    const password = prompt('Şifrenizi girin: ');
  
    console.log('Giriş denemesi: Kullanıcı Adı:', username, 'Şifre:', password);
  
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      console.log('Giriş başarılı. Hoş geldiniz, ' + user.username + '!');
      this.showUserMenu(user);
    } else {
      console.log('Hatalı kullanıcı adı veya şifre. Tekrar deneyin.');
      console.log('Kayıtlı Kullanıcılar:', this.users);
      this.showMainMenu();
    }
  }
  

  showUserMenu(user) {
    const choice = prompt(`Hoş geldiniz, ${user.username}! Lütfen bir seçenek seçin: (1) Bilet Satın Al, (2) Çıkış\n`);

    switch (choice) {
      case '1':
        this.buyTicket(user);
        break;
      case '2':
        console.log('Çıkılıyor...');
        break;
      default:
        console.log('Geçersiz seçenek. Tekrar deneyin.');
        this.showUserMenu(user);
    }
  }

  buyTicket(user) {
    const eventName = prompt('Etkinlik adını girin: ');
    const quantity = parseInt(prompt('Kaç adet bilet satın almak istiyorsunuz: '), 10);

    const event = this.tickets.find(ticket => ticket.eventName === eventName);
    if (event && event.availableTickets >= quantity) {
      user.buyTicket(eventName, quantity);
      event.availableTickets -= quantity;
      this.saveToFiles();
    } else {
      console.log('Belirtilen etkinlik bulunamadı veya yeterli bilet yok. Tekrar deneyin.');
    }
    this.showUserMenu(user);
  }

  adminLogin() {
    const adminUsername = prompt('Yönetici kullanıcı adınızı girin: ');
    const adminPassword = prompt('Yönetici şifrenizi girin: ');

    // Yönetici doğrulama işlemleri (gerçek bir sistemde daha sofistike bir yöntem kullanılmalıdır)

    if (adminUsername === 'admin' && adminPassword === 'admin123') {
      // Doğrulama başarılı
      console.log('Yönetici girişi başarılı!');
      this.showAdminMenu();
    } else {
      // Doğrulama başarısız
      console.log('Hatalı yönetici kullanıcı adı veya şifre. Tekrar deneyin.');
      this.showMainMenu();
    }
  }

  showAdminMenu() {
    console.log('--- Admin Menüsü ---');
    const adminChoice = prompt('Yönetici Menüsü: Lütfen bir seçenek seçin: (1) Kullanıcıları Görüntüle, (2) Etkinlik Biletlerini Görüntüle, (3) Çıkış\n');

    switch (adminChoice) {
      case '1':
        this.showUsers();
        break;
      case '2':
        this.showEventTickets();
        break;
      case '3':
        console.log('Çıkılıyor...');
        break;
      default:
        console.log('Geçersiz seçenek. Tekrar deneyin.');
        this.showAdminMenu();
    }
  }

  showUsers() {
    // Kullanıcıları göster
    console.log('--- Kullanıcılar ---');
    this.users.forEach(user => {
      console.log(`ID: ${user.id}, Kullanıcı Adı: ${user.username}, Email: ${user.email}, Telefon: ${user.phone}`);
    });
    console.log('---------------------');
    this.showAdminMenu();
  }

  showEventTickets() {
    // Etkinlik biletlerini göster
    console.log('--- Etkinlik Biletleri ---');
    this.tickets.forEach(ticket => {
      console.log(`ID: ${ticket.id}, Etkinlik Adı: ${ticket.eventName}, Fiyat: ${ticket.price}, Zaman: ${ticket.eventTime}, Alıcı ID: ${ticket.buyerId}`);
    });
    console.log('--------------------------');
    this.showAdminMenu();
  }
}

const app = new TicketApp();
