const prompt = require('prompt-sync')({sigint:true})

const question= require('./questions.json');
const results=require('./results.json');
const fs= require('fs');
//const date=new Date();

console.log("Q - " + question.Frågeformulär[0].fråga);
console.log(results);


//skriv ut alla frågor
for(let index=0; index<question.Frågeformulär.length; index++){
    console.log("Q " + index + " - " + question.Frågeformulär[index].fråga)
let running = true
while (running) {
    const results =prompt(question.Frågeformulär[index].fråga);
    console.log(results) ;
    if (answer === "ja") {
        hund +=3, kat+=2, rabbish +=1, fisk+=0;
        running=false
     }else if (answer === "nej") {
        hund +=0, kat+=1, rabbish +=2, fisk+=3;
        running=false
     }else{
        console.log("Svara!")
     }
    }
}








