// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
//that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, 
//and a shirt of any size with a different message.

function make_shirt(size: string = 'large', message: string = 'I love typescript') {
    console.log(`Creating a ${size} shirt with the message: '${message}'`);
}

// Creating a large shirt with the default message, 
make_shirt();

// Creating a medium shirt and a medium shirt with the default message, 
make_shirt('medium');

// Creating a shirt of any size with a default message, 
make_shirt('small', 'hello world!');