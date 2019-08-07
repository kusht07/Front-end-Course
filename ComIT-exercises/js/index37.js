let average = 6;
let studentAverage = 4;

console.log(`Does student has greater or equal average required to pass: ${studentAverage >= average}`);
console.log(`Student is missing ${average >= studentAverage && average % studentAverage} points to pass`); 
// what if average is less than student average? it returns a negative value. It Will need an if.