let text = 'game of thrones';
let firstChar;
let secondChar;
let thirdChar;

firstChar = text.charAt(0);
secondChar = text.charAt(5);
thirdChar = text.charAt(8);

let result = firstChar.concat(secondChar,thirdChar);
console.log(`The final result is: ${result.toUpperCase()}`);