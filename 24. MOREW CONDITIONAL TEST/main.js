var car = "subaru";
var age = 22;
var numbers = [1, 2, 3, 4, 5, 6,];
// STRING TEST 
// Test 1: Equality (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// TEST 2: Equality (false)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subaru');
// Test 3: Inequality (true)
console.log("Is car != 'Toyota'? I predict true.");
console.log(car != 'Toyota');
// Test 4: Inequality (false)
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// Lowercase function test
// Test 5: lowercase conversion (true)
console.log("Is car.tolowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
// Test 6: lowercase conversion (false)
console.log("Is car === car.tolowerCase() == 'subaru'? I predict false.");
console.log(car === car.toLowerCase());
// NUMERICAL TEST
// Test 7: Equality (true)
console.log("Is age == 25? I Predict true.");
console.log(age == 25);
// Test 8: Inequality (False)
console.log("Is age != 30? I Predict true.");
console.log(age != 30);
// Test 9: Greater than (false)
console.log("Is age > 30? I Predict false.");
console.log(age > 30);
// Test 10: less than or equal (true)
console.log("Is age <- 22? I Predict true.");
console.log(age <= 22);
// LOGICAL OPERATOR
// TEST 11: AND (TRUE)
console.log("Is age > 20 && age < 30? I Predict true.");
console.log(age > 20 && age < 30);
// test 12: or (false)
console.log("Is age >  30 || age < 18? I Predict false.");
console.log(age > 30 || age < 18);
// Array test
// Test 14: in array (true)
console.log("Is 3 in numbers? I Predict true.");
console.log(3 in numbers);
// Test 15: not in arrray (false)
console.log("Is 5 not in numbers? I Predict true.");
console.log(5 in numbers);
