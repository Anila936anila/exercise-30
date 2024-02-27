"use strict";
const userNames = ['admin', 'Kamran Khan Tessori', 'Daniyal Nagori', 'Zia Khan', 'Muhammad Amin', 'Muhammad Ali'];
function greetUsers() {
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report`);
        }
        else {
            console.log(`Hello $(userNames[i]), thank you for loging in again.`);
        }
    }
}
greetUsers();
