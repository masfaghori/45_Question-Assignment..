// Write a function called describe_city() that accepts the name of a 
//city and its country. The function should print a simple sentence, 
//such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the c

function describe_city(city: string, country:string = 'Pakistan'){
    console.log(`${city} is in ${country}`)};

    describe_city('karachi',); // here it will use default country.
    describe_city('bombay', 'india');
    describe_city('lahore'); // here it will use default country.

