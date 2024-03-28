//Making a array of countries and print its original order
let placesToVisit : string [] = ['japan','brazil','turkey','baku','thailand'];
console.log('original order:' + placesToVisit)

//Print your array in alphabetical order without modifying the actual list
console.log('copy' + [...placesToVisit].sort());

//Show that your array is still in its original order by printing it again.
console.log('original order:' + placesToVisit)

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy' + [...placesToVisit].sort().reverse());

//Show that your array is still in its original order by printing it agin
console.log('copy' + [...placesToVisit].sort().reverse());

//Reverse the order of your list. Print the array to show that its order has changed.
console.log('original order:' + placesToVisit.sort());

//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log('original order:' + placesToVisit.sort().reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('sorted in Alphabetical order:' + placesToVisit.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original order:' + placesToVisit.reverse());
