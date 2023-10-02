const prompt = require('prompt-sync')({sigint:true}); 

// Stränglängd
const str = "Hello World";
const len = str.length;  // 11
console.log(len);

// slice()

const str2 = "Hello, world!";
const sliced = str.slice(0, 5);  // "Hello"
const slicedNegative = str.slice(-6, -1);  // "world"
console.log(sliced);

// substring()
const str3 = "Hello, world!";
const substringed = str.substring(0, 5);  // "Hello"
const substringedSwapped = str.substring(5, 0);  // "Hello"
console.log(substringed);

// replace()
const str5 = "I like apples.";
const newStr = str.replace("apples", "oranges");  // "I like oranges."
console.log(newStr);

// replaceAll()
const str6 = "apple apple";
const newStr6 = str6.replaceAll("apple", "orange");  // "orange orange"
console.log(newStr6);

// toUpperCase() & toLowerCase()
const str7 = "Hello";
const upper = str7.toUpperCase();  // "HELLO"
const lower = str7.toLowerCase();  // "hello"
console.log(upper);
console.log(lower);

// concat ()
const str8 = "Hello";
const str9 = "world";
const concatenated = str8.concat(' ', str9);  // "Hello world"
console.log(concatenated);


// trim()
const str10 = "  Hello world  ";
const trimmed1 = str10.trim();  // "Hello world"
console.log(trimmed1);

// trimStart()
const str11 = "  Hello world  ";
const trimmed2 = str11.trimStart();  // "Hello world  "
console.log(trimmed2);

// trimEnd()
const str12 = "  Hello world  ";
const trimmed3 = str12.trimEnd();  // "  Hello world"
console.log(trimmed3);

// padStart()
const str13 = "5";
const padded = str13.padStart(3, "0");  // "005"
console.log(padded)

// padEnd()
const str14 = "apple";
const padded2 = str14.padEnd(10, "-");  // "apple-----"
console.log(padded2);

// charAt()
const str15 = "Hello";
const char = str15.charAt(0);  // "H"
console.log(char);

// harCodeAt()
const str16 = "Hello";
const charCode = str16.charCodeAt(0);  // 72
console.log(charCode);

// split()
const str17 = "apple,orange,banana";
const fruits = str17.split(",");  // ["apple", "orange", "banana"]
console.log(fruits);