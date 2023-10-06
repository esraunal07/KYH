const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');

console.log("Välkommen! Du är här för det bästa valet!");

const Användarnamn = prompt('Vad heter du?');
const dagensdatum = new Date();
const datumTid = dagensdatum.toString();
console.log("Din starttid: ", datumTid);
console.log("Svara på frågorna med ja/nej!");

function laddaQuestions() {
  try {
    const data = fs.readFileSync("./questions.json", );
    return JSON.parse(data).questions;
  } catch (error) {
    console.error("Ett fel uppstod när enkäten laddades:", error);
    return [];
  }
}

function saveAnswers(poäng) {
  try {
    fs.writeFileSync('./answers.json', JSON.stringify(poäng, null, 2));
  } catch (error) {
    console.error('Det gick inte att spara resultat:', error);
  }
}

const poäng = {
  katt: 0,
  hund: 0,
  kanin: 0,
  fisk: 0,
};

const questions = laddaQuestions();

for (let index = 0; index < questions.length; index++) {
  let running = true;
  while (running) {
    const userAnswer = prompt(questions[index].question + ' (Ja/Nej)').toLowerCase();
    if (userAnswer === "ja" || userAnswer === "nej") {
      const animal = userAnswer === "ja" ? questions[index].poäng.Ja : questions[index].poäng.Nej;
      Object.keys(animal).forEach((husdjur) => {
        poäng[husdjur] += animal[husdjur];
      });
      running = false;
    } else {
      console.log("Något gick fel! Svara med 'ja' eller 'nej'.");
    }
  }
}

const husdjur = ['katt', 'hund', 'kanin', 'fisk'];

for (const animal of husdjur) {
  console.log(`${animal}: ${poäng[animal]} poäng`);
}

let totalpoäng = 0;

for (const animal of husdjur) {
  totalpoäng += poäng[animal];
}

const procentsatser = {};

for (const animal of husdjur) {
  const procentsats = (poäng[animal] / questions.length) * 100;
  procentsatser[animal] = procentsats.toFixed(2);
}

let bästHusdjur = "";
let högstaprocent = 0;

for (const animal of husdjur) {
  if (parseFloat(procentsatser[animal]) > högstaprocent) {
    högstaprocent = parseFloat(procentsatser[animal]);
    bästHusdjur = animal;
  }
}

console.log(Användarnamn);
console.log(dagensdatum);

console.log("Baserat på dina preferenser är det bäst passande djuret: ", bästHusdjur);
console.log("Procentuell matchning:", högstaprocent.toFixed(2) + "%");

const userAnswers = [{
  namn: Användarnamn,
  date: dagensdatum,
  result: `Baserat på dina preferenser är det bäst passande djuret: ${bästHusdjur}.`,
}];

saveAnswers(userAnswers);

