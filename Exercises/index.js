import c from "./card.js"
import b from "./bankomat.js"
import PromptSync from "prompt-sync";
const prompt = require('prompt-sync')({sigint:true});

const card = new c("");

console.log(card.toString);



const bankomat = new b("");
console.log(bankomat.toString);
  
  bankomat.insertCard(card);
  bankomat.enterPin('0123');
  bankomat.getBalance();
  bankomat.withdrawMoney(9000);
  bankomat.ejectCard();