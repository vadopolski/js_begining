// елочка
let res2 = "*";
const height = 15;

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