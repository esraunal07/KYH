const prompt = require('prompt-sync')({sigint:true}); 

const name = prompt('Vad heter du? '); 

console.log(`Hej, ${name}!`); 

console.log("Hej,", name, "!"); 

 

const age = parseInt(prompt('Hur gammal är du? ')); 

console.log(typeof age); 

 

// if (isNaN(age)) { 

//   console.log("Du skrev inte in ett tal!"); 

// } else { 

//   console.log(`Nästa år blir du ${age + 1} år gammal.`); 

// }