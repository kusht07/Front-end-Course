let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';

text1 = playerName.slice(0,12).toUpperCase();
text2 = teams.charAt(46).toUpperCase() + teams.slice(47,50);
text3 = message.slice(9,20);
text4 = message.slice(34,38);

console.log(`${text1} ${text3} ${text2} player ${text4} ${text2}!!`);