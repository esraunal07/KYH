const prompt = require('prompt-sync')({ sigint: true });
const question = require('./questions.json');
const fs = require('fs');

console.log("Välkommen! Du är här för det bästa valet!");

const Användarnamn = prompt('Vad heter du?');
const dagensdatum = new Date();
const datumTid = dagensdatum.toString();
console.log("Din starttid : ", datumTid);
console.log("Svara på frågorna med ja/nej !");

function laddaQuestions() {
  try {
    const data = fs.readFileSync("./questions.json");
    return JSON.parse(data);
  } catch (error) {
    console.error("Ett fel uppstod när enkäten laddades:", error);
    return [];
  }
}

function saveAnswers(answers) {
  try {
    fs.writeFileSync('./answers.json', JSON.stringify(answers, null, 2));
  } catch (error) {
    console.error('Failed to save results:', error);
  }
}

const Uanswers = {
    Katt: 0,
    Hund: 0,
    Kanin: 0,
    Fisk: 0,
  };
  
  const questions = laddaQuestions();
  
  for (let index = 0; index < question.questions.length; index++) {
    let running = true;
    while (running) {
      const userAnswer = prompt(question.questions[index].question).toLowerCase();
      if (userAnswer === "ja" || userAnswer === "nej") {
        Uanswers[question.questions[index].animal] += userAnswer === "ja" ? 1 : 0;
        running = false;
      } else {
        console.log("Något gick fel! Svara med 'ja' eller 'nej'.");
      }
    }   
}

let totalpoäng = 0;

for (const husdjur in Uanswers) {
  totalpoäng += Uanswers[husdjur];
}

const procentsatser = {};

for (const husdjur in Uanswers) {
  const procentsats = (Uanswers[husdjur] / question.questions.length) * 100; 
  procentsatser[husdjur] = procentsats.toFixed(2);
}

let bästHusdjur = "";
let högstaprocent = 0;

for (const husdjur in procentsatser) {
  if (parseFloat(procentsatser[husdjur]) > högstaprocent) {
    högstaprocent = parseFloat(procentsatser[husdjur]);
    bästHusdjur = husdjur;
  }
}

console.log(Användarnamn);
console.log(dagensdatum);

console.log("Baserat på dina preferenser är det bäst passande djuret : ", bästHusdjur);
console.log("Procentuell matchning:", högstaprocent.toFixed(2) + "%");

const userAnswers = [{
  namn: Användarnamn,
  date: dagensdatum,
  result: `Baserat på dina preferenser är det bäst passande djuret : ${bästHusdjur}.`,
}];

saveAnswers(userAnswers);
