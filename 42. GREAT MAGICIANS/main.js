// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
var magiciansName = ['harry houdini', 'david blaine', 'doug henning'];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (magiciansName) {
        console.log(magiciansName);
    });
}
function make_great(magiciansName) {
    for (var i = 0; i < magiciansName.length; i++) {
        magiciansName[i] = magiciansName[i] + 'the great';
    }
}
make_great(magiciansName);
show_magicians(magiciansName);
