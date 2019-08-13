let weekdayNumber = 4;
let messageSwitch;
let messageIf;

switch (weekdayNumber) {
    case 1:
        messageSwitch = "Today it's Monday";
        break;
    case 2:
        messageSwitch = "Today it's Tuesday";
        break;
    case 3:
        messageSwitch = "Today it's Wednesday";
        break;
    case 4:
        messageSwitch = "Today it's Thursday";
        break; 
    case 5:
        messageSwitch = "Today it's Friday";
        break;
    case 6:
        messageSwitch = "Today it's Saturday";
        break;
    case 7:
        messageSwitch = "Today it's Sunday";
        break;                   
    default:
        messageSwitch = "Please input a number between 1 and 7";
}
 
console.log('Result from switch-case is = ', messageSwitch);

// If version

if (weekdayNumber == 1) {
    messageIf = "Today it's Monday";
} else if (weekdayNumber == 2) {
    messageIf = "Today it's Tuesday";
} else if (weekdayNumber == 3) {
    messageIf = "Today it's Wednesday";
} else if (weekdayNumber == 4) {
    messageIf = "Today it's Thursday";
} else if (weekdayNumber == 5) {
    messageIf = "Today it's Friday";
} else if (weekdayNumber == 6) {
    messageIf = "Today it's Saturday";
} else if (weekdayNumber == 7) {
    messageIf = "Today it's Sunday";
} else {
    messageIf = "Please input a number between 1 and 7";
}

console.log('Result from if-else is = ', messageIf)