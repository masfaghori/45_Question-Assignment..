//Checking Usernames: Do the following to create a program that
// simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.
var current_users = ['mahjabeen', 'maryam', 'eric', 'ayan'];
var new_users = ['masfa', 'abdullah', 'jiya', 'leon'];
new_users.forEach(function (newuser) {
    if (current_users.some(function (currentusers) { return currentusers.toLocaleLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
