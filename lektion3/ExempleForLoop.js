/*1.fragår : Använd en for loop, användaren ska skriva 
in ett nummer (inga negativa nummer) och 
sen ska programmet skriva ut alla siffror från 0 till nummret
*/

for (let i = 0; i < 10; i++) {
  console.log(i); // Skriver ut numren 0 till 10
}


//2. Skriv om uppgift 1 med en while loop.
let i = 3;
while (i < 11) {
  console.log(i); // Skriver ut numren 0 till 4
  i++;
}

//3. Skriv ett program som skriver ut alla ojämna tal mellan 0 - 20.
for (let num = 1; num <= 20; num += 2) {
    console.log(num);
}