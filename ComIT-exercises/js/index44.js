let text = 'HELLO';
counter = 1;
let revert = text.charAt(text.length-counter);
revert = revert.concat(text.charAt(text.length-(++counter)));
revert = revert.concat(text.charAt(text.length-(++counter)));
revert = revert.concat(text.charAt(text.length-(++counter)));
revert = revert.concat(text.charAt(text.length-(++counter)));

result = revert.toLowerCase();
console.log("The final result is: ", result);