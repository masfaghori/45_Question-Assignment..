// continue with exercise_14
let guest_list : string[] = ['salar','hamin','jarry','anaya','meerab'];
for(let i=0; i<guest_list.length; i++){
    console.log('respected Sir/Madam;' + guest_list[i] + ',\nMe inivted you on dinner tomorrow.\nThank YOU');
}
// exercise_15
let absentGuest : string = "Salar";
let newGuest : string = "Ayat";
guest_list[0] = newGuest;
for(let i=0; i<guest_list.length; i++){
    console.log('respect sir/madam;' + guest_list[i] + ',\nMe invited you on dinner tomorrow.\nTHANK YOU');
}
console.log(`mr ${absentGuest} will not coming on dinner tommorw,`);
