/// continue with exercise_14
var guest_list = ['salar', 'hamin', 'jarry', 'anaya', 'meerab'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected Sir/Madam;' + guest_list[i] + ',\nMe inivted you on dinner tomorrow.\nThank YOU');
}
// exercise_15
var absentGuest = "Salar";
var newGuest = "Ayat";
guest_list[0] = newGuest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respect sir/madam;' + guest_list[i] + ',\nMe invited you on dinner tomorrow.\nTHANK YOU');
}
console.log("mr ".concat(absentGuest, " will not coming on dinner tommorw,"));
