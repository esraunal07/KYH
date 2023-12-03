export default class User {
  #id
  #username
  #password
  #email
  #phone
  #tickets

  constructor(username, password, email, id, phone) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.phone = phone;
    this.tickets = [];
  

}
}