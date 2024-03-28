// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
let magiciansNames: string[] = ['harry houdini', 'david blaine', 'doug henning'];

function show_magicians(magiciansNames: string []) {
magiciansNames.forEach(magiciansName => { console.log(magiciansName)

});
}
show_magicians(magiciansNames)