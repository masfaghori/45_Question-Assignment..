// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
//the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate
// array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added 
//to each magician’s name.
var magiciansName = ['harry houdini', 'david blaine', 'doug henning'];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (magiciansName) {
        console.log(magiciansName);
    });
}
function make_great(magiciansName) {
    var greatMagicians = [];
    magiciansName.forEach(function (magiciansName) {
        greatMagicians.push("".concat(magiciansName, " 'the great'"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magiciansName.slice());
console.log('original magiciansName:');
show_magicians(magiciansName);
console.log('great magiciansName');
show_magicians(greatMagicians);
