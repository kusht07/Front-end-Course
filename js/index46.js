let userAndPassword = 'pepito2017,12345';
let username = userAndPassword.substr(0,10);
let password = userAndPassword.substr(11,15);

console.log(`The user ${username} has ${password} as password.`);