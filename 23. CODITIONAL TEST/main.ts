let car: string = 'Subaru';

// TEST 1: Equalitiy corparison (True)
console.log("Is car == 'subaru' ? I predict true.");
console.log(car == 'subaru'); // True

// Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru' ? I predict true.");
console.log(car === 'subaru'); // True

// Test 3: Inequality comparison (FALSE)
console.log("Is car != 'subaru' ? I predict false.");
console.log(car != 'subaru'); // falsae

// TEST 4: STRICT INEQUALITY COMPARISION (FALSE)
console.log("Is car !== 'subaru' ? I predict false.");
console.log(car !== 'subaru'); // false

// Test 5: Less than comperison (false)
console.log("Is car < 'subaru'? I Predict false.");
console.log(car < 'subaru'); // false (lexicographic comperison)

// Test 6: Greater than comparison (false)
console.log("Is car > 'subaru'? I Predict false.");
console.log(car > 'subaru'); // false (lexicographic comperison)

// TEST 7: Less than or equal comperison (true) 
console.log("Is car <= 'subaru'? I Predict true.");
console.log(car <= 'subaru'); // true

// Test 8: Grater than or equal comperison (true)
console.log("Is car >= 'subaru'? I Predict true.");
console.log(car >= 'subaru'); // true

// Test:9 Checking truthness (true)
console.log("Is car? 'subaru'? I Predict true.");
console.log(car); // true (non-empty string is trurhly)

// Test 10: CHECKING FALSINESS (FALSE)
console.log("Is !car? I Predict false.");
console.log(!car); // false (negation of a trurhly value)

