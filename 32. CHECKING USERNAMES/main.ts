//Checking Usernames: Do the following to create a program that
// simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. 
//Make sure one or two of the new usernames are also in the current_users list.

let current_users: string [] = ['mahjabeen', 'maryam', 'eric' ,'ayan'];
let new_users: string [] = ['masfa', 'abdullah', 'jiya', 'leon'];
new_users.forEach(newuser => {
    if(current_users.some(currentusers => currentusers.toLocaleLowerCase() === newuser.toLowerCase())) {
        console.log(`${newuser} will need to enter a new username.`);
    } else {
        console.log(`${newuser} is available.`);
    }
})