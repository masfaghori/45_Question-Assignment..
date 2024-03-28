let  users : string[] = ['murtasim', 'meerab', 'mehak', 'shamsher', 'admin'];

for(let user of users){
    if(user == "admin"){
        console.log("hello admin, would you liketo see a status report?")
    }

else{
    console.log(`hello ${user}, thank you for logging in again.`)
}
}