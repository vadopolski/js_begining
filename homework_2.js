// вороны
const mainString = "ворон";
const quantity = 1118;

for (let i = 0; i < quantity; i++) {
    let rest100 = i % 100;

    if (rest100 == 11 || rest100 == 12 || rest100 == 13 || rest100 == 14) {
        console.log(i + " " + mainString);
    } else {
        let rest10 = i % 10;

        if (rest10 == 1)
            console.log(i + " " + mainString + "a");
        else if (rest10 == 2 || rest10 == 3 || rest10 == 4)
            console.log(i + " " + mainString + "ы");
        else console.log(i + " " + mainString)
    }
}