// exercise_16
var guest_list = ['salar', 'hamin', 'jarry', 'anaya', 'meerab'];
//for(let i=0; i<guest_list.length; i++){
//    console.log('respected Sir/Madam;' + guest_list[i] + ',\nMe inivted you on dinner tomorrow.\nThank YOU\n');
//}
var absentGuest = "Salar";
var newGuest = "Ayat";
guest_list[0] = newGuest;
//for(let i=0; i<guest_list.length; i++){
//    console.log('respect sir/madam;' + guest_list[i] + ',\nMe invited you on dinner tomorrow.\nTHANK YOU');
//}
guest_list.unshift('shibra', 'shamsher', 'shahzaib');
//for(let i=0; i<guest_list.length; i++){
//    console.log('respect sir/madam;' + guest_list[i] + ',\nMe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest.\nTHANK YOU');
//}
console.log('\nunfortunately we can not arrange big table, Only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log('sorry sir/madam.${remove_guest} you are not invited for dinner.');
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('respect sir/madam;' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner .\nTHANK YOU\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
