let text = 'HELLO';
counter = 0;
let revert = text.charAt(text.length-(++counter));
revert += text.charAt(text.length-(++counter));
revert += text.charAt(text.length-(++counter));
revert += text.charAt(text.length-(++counter));
revert += text.charAt(text.length-(++counter));

result = revert.toLowerCase();
console.log("The final result is:", result);