const prompt = require('prompt-sync')({ sigint: true })

const todoList = [];
const doneList = [];

let running = true;

while (running) {
  console.log(`TODOLIST - MENY

. Skriv ut todolist
. Skriv ut doneList
. Lägg till något i listan
. Ta bort en sak överst i listan
. Ta bort en sak längst ner i listan
. Ta bort något baserat på index
. Ta bort något baserat på text
. Flytta en sak till toppen i todoList
. Flytta en sak till botten av todoList
. Flytta en sak ett steg upp i todoList
. Flytta en sak ett steg ner i todoList
Q. Avsluta programmet`);
  const svar = prompt().trim().toUpperCase();

  switch (svar) {

    case "1":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
      }
      break;

    case "2":
      if (doneList.length === 0) {
        console.log(`Din doneList är tom!`);
      } else {
        for (let i = 0; i < doneList.length; i++) {
          console.log(`${i + 1}. ${doneList[i]}`);
        }
      }
      break;

    case "3":
      console.log(`Skriv in din nya todo:`);
      const newTodo = prompt().trim();

      if (newTodo.length === 0) {
        console.log(`Du måste skriva in något för att skapa en ny todo!`);
      } else {
        todoList.push(newTodo);
        console.log(`'${newTodo}' har lagts till i listan!`);
      }
      break;

    case "4":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        const removed = todoList.shift();
        doneList.push(removed)
        console.log(`'${removed}' har tagits bort från listan!`);
      };
      break;

    case "5":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        const removed = todoList.pop();
        doneList.push(removed)
        console.log(`'${removed}' har tagits bort från listan!`);
      };
      break;

    case "6":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`Skriv in ett index för att ta bort något:`);
        const index = Number(prompt().trim());

        if (!isNaN(index) && index >= 1 && index <= todoList.length) {
          const removed = todoList.splice(index - 1, 1)
          doneList.push(removed)
          console.log(`'${removed}' har tagits bort från listan!`);
        }
      };
      break;

    case "7":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`Skriv in en matchande text för att ta bort något:`);
        const text = prompt().trim();

        if (todoList.indexOf(text) >= 0) {
          const index = todoList.indexOf(text)
          const removed = todoList.splice(index)
          doneList.push(removed)
          console.log(`'${removed}' har tagits bort från listan!`);
        }
      };
      break;

    case "8":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`Skriv in ett index för att flytta något till toppen av listan:`);
        const index = Number(prompt().trim());

        if (!isNaN(index) && index >= 1 && index <= todoList.length) {
          const move = todoList.splice(index - 1, 1)
          todoList.unshift(move[0]);
          console.log(`Du har flyttat '${move[0]}' till toppen av listan!`);
        }
      };
      break;

    case "9":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`Skriv in ett index för att flytta något till botten av listan:`);
        const index = Number(prompt().trim());

        if (!isNaN(index) && index >= 1 && index <= todoList.length) {
          const move = todoList.splice(index - 1, 1)
          todoList.push(move[0]);
          console.log(`Du har flyttat '${move[0]}' till botten av listan!`);
        }
      };
      break;

    case "10":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`Skriv in ett index för att flytta något 1 steg upp i listan:`);
        const index = Number(prompt().trim());

        if (!isNaN(index) && index >= 1 && index <= todoList.length) {
          const move = todoList.splice(index - 1, 1)
          todoList.splice(index - 2, 0, move[0])
          console.log(`Du har flyttat '${move[0]}' 1 steg ner upp listan!`);
        }
      };
      break;

    case "11":
      if (todoList.length === 0) {
        console.log(`Din todolist är tom!`);
      } else {
        for (let i = 0; i < todoList.length; i++) {
          console.log(`${i + 1}. ${todoList[i]}`);
        }
        console.log(`Skriv in ett index för att flytta något 1 steg ner i listan:`);
        const index = Number(prompt().trim());

        if (!isNaN(index) && index >= 1 && index <= todoList.length) {
          const move = todoList.splice(index - 1, 1)
          todoList.splice(index, 0, move[0])
          console.log(`Du har flyttat '${move[0]}' 1 steg ner i listan!`);
        }
      };
      break;

    case "Q":
      console.log("Q");
      running = false;
      break;
    default:
      console.log(`Du måste välja mellan 1-4 eller Q!`);
      break;
  }
}




