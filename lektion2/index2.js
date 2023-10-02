/*


let day = 'Tuesday';

switch (day) {
  case 'Monday':
    console.log('It’s Monday.'); // : = {
    break;
  case 'Tuesday':
    console.log('It’s Tuesday.');
    break; // break = }
  case 'Monday' :
    console.log('Kalle') 
    break;
  default:
    console.log('It’s some other day.');
}

*/

console.log('Meny 1. Addera 2. Multiplicera  3. Dividera');
  
  const userMenyChoice = 1;
  
  switch (userMenyChoice) {
    case 1:
      console.log(" 1 + 2 = " + (1 + 2));
    case 2:
      console.log(" 2 * 4 = " + (2 * 4));
      break;
    case 3:
      console.log(" 10 / 2 = " + (10 / 2));
      break;
    default:
      console.log("Du valde inget giltigt menyval!");
  }