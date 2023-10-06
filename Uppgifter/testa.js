const prompt = require('prompt-sync')({sigint:true})

const question= require('./questions.json');
//const results=require('./results.json');
const fs= require('fs');
//const date=new Date();


const user = {
    name : namn,
    date : new Date().toLocaleDateString("Sv").Date,
}


//console.log("Q - " + question.Frågeformulär[0].fråga);
//console.log(results);

const namn = prompt("Vad heter du?");
//console.log(namn);

//skriv ut alla frågor
for(let index=0; index<question.Frågeformulär.length; index++){
    console.log("Q " + index + " - " + question.Frågeformulär[index].fråga)

try {
    const data =JSON.stringify(svar);
    fs.writeFileSync('results.json', data);
    console.log('Saved results to results.json');   
} catch (error) {
    console.error('Failed to save results:', error);
    
}

//console.log(results);
let ja;
let nej;
    
let running = true
while (running) {
    const results =prompt(question.Frågeformulär[0].fråga); 
    if (svar === "ja") {
        hund +=3, kat+=2, rabbish +=1, fisk+=0;
        running=true
     }else if (svar === "nej") {
        hund +=0, kat+=1, rabbish +=2, fisk+=3;
        running=true
     }else{
        console.log("Svara!");
     }
    }


}






