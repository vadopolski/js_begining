const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Первый способ.
rl.question('Enter what do you think of Web Storm? ', function(answer) {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    answer += " is Changed answer";

    console.log(answer);

    rl.close();R
});

// Второй способ.
// rl.on('line', function(input) {
//     console.log('Received:' + input);
//     let result = input*input;
//     console.log('Result multiplication is: ' + result);
// });
