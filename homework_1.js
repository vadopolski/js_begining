// елочка
let res2 = "*";
const height = 15;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите высоту елочки : ', function(height) {
    console.log(`Высота елочки : ${height}`);

    for (let i = 0; i < height; i++) {
        let i1 = i;
        let res1 = "";

        while (i1 < height) {
            res1 += " ";
            i1++;
        }

        console.log(res1 + res2 + res1);

        res2 += "**";
    }

    rl.close();
});

