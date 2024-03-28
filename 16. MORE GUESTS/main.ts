// exercise_15
let guest_list : string[] = ['salar','hamin','jarry','anaya','meerab'];
//for(let i=0; i<guest_list.length; i++){
//    console.log('respected Sir/Madam;' + guest_list[i] + ',\nMe inivted you on dinner tomorrow.\nThank YOU\n');
//}
let absentGuest : string = "Salar";
let newGuest : string = "Ayat";
guest_list[0] = newGuest;
for(let i=0; i<guest_list.length; i++){
    console.log('respect sir/madam;' + guest_list[i] + ',\nMe invited you on dinner tomorrow.\nTHANK YOU');
}

// exercise_16
guest_list.unshift('shibra','shamsher','shahzaib');
for(let i=0; i<guest_list.length; i++){
    console.log('respect sir/madam;' + guest_list[i] + ',\nMe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest.\nTHANK YOU');
}

