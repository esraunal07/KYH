import PromptSync from "prompt-sync";
import Musician from "./musiker.js";
import Band from "./band.js";
import fs from "fs" ;

const prompt = PromptSync({sigint:true});

const musicians = [];
const bands = [];


let userData ;
try{
  const data =fs.readFileSync("./Data.json");
  userData=JSON.parse(data)
}catch (error){
  userData ={ responses: []} ;
}

let run = true;
while (run) {
    console.log(`
    Meny
    1. lägg till en ny band
    2. ta bort grupp
    3. skapa ny musiker
    4. ta bort muskier
    5. uppdatera information 
    6. Avsluta programmet
      
    Val -> `);
    const val =prompt();
    switch(val.trim().toUpperCase()){
        case "1" :
            let bandName =prompt("Vad heter din nya grupp?") ;
            let formationYear = prompt("Årtal bandet bildades?");
            let dissolutionYear = prompt("Årtal bandet upplöstes? (Lämna tomt om bandet fortfarande existerar)");
            const newBand = new Band(bandName, formationYear);
            bands.push(newBand);
            console.log(`Bandet "${bandName}" har lagts till.`);
            break;
        
            case "2" :
                console.log("Tillgängliga band:");
                bands.forEach((band, index) => {
                  console.log(`${index + 1}. ${band.name}`);
                });
                let bandIndexToRemove = prompt("Vilket band vill du ta bort? (Ange siffran)");
                if (bandIndexToRemove > 0 && bandIndexToRemove <= bands.length) {
                  const removedBand = bands.splice(bandIndexToRemove - 1, 1);
                  console.log(`Bandet "${removedBand[0].name}" har tagits bort.`);
                } else {
                  console.log("Ogiltigt val. Välj en siffra som motsvarar ett band.");
                }
                break;
            case "3" :
                let musicianName = prompt("Vad heter den nya musikern?");
                let birthYear = prompt("Födelseår?");
                let instruments =prompt("Vilken instruments?")
                const newMusician = new Musician(musicianName, birthYear);
                musicians.push(newMusician);
                console.log(`Musikern "${musicianName}" har lagts till.`);
                break;
            case "4":
                console.log("Tillgängliga musiker:");
                musicians.forEach((musician, index) => {
                console.log(`${index + 1}. ${musician.name}`);
                });
                let musicianIndexToRemove = prompt("Vilken musiker vill du ta bort? (Ange siffran)");
                if (musicianIndexToRemove > 0 && musicianIndexToRemove <= musicians.length) {
                    const removedMusician = musicians.splice(musicianIndexToRemove - 1, 1);
                    console.log(`Musikern "${removedMusician[0].name}" har tagits bort.`);
                } else {
                console.log("Ogiltigt val. Välj en siffra som motsvarar en musiker.");
                }
                break;
            case "5":
                console.log("Tillgängliga musiker:");
                musicians.forEach((musician, index) => {
                console.log(`${index + 1}. ${musician.name}`);
                    });
                let musicianIndexToUpdate = prompt("Vilken musiker vill du uppdatera? (Ange siffran)");
                if (musicianIndexToUpdate > 0 && musicianIndexToUpdate <= musicians.length) {
                      const musician = musicians[musicianIndexToUpdate - 1];
                      console.log(`Vald musiker: ${musician.name}`);
                      let updateChoice = prompt("Vad vill du uppdatera?\n1. Namn\n2. Födelseår\nVal -> ");
                 switch (updateChoice.trim()) {
                    case "1":
                    const newName = prompt("Ange det nya namnet: ");
                    musician.name = newName;
                    console.log(`Namnet har uppdaterats till "${newName}".`);
                    break;
                    case "2":
                    const newBirthYear = prompt("Ange det nya födelseåret: ");
                    musician.birthYear = newBirthYear;
                    console.log(`Födelseåret har uppdaterats till "${newBirthYear}".`);
                    break;
                    default:
                    console.log("Ogiltigt val.");
                     }
                    } else {
                      console.log("Ogiltigt val. Välj en siffra som motsvarar en musiker.");
                    }
                    break;
            case "6":
            run = false;
            console.log("Programmet avslutas.");
            break;
            default:
            console.log("Ogiltigt val. Vänligen välj en giltig åtgärd (1-6).");
            }

    userData.responses.push({ choice: val.trim().toUpperCase() });
    fs.writeFileSync('Data.json', JSON.stringify(userData, null, 2));
}




  