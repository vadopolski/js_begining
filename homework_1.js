// вороны

// елочка
let res2 = "*";

for (let i = 0; i < 5; i++) {
    let i1 = i;
    let res1 = "";

    while (i1 < 5) {
        res1 += " ";
        i1++;
    }

    res2 += "**";

    console.log(res1 + res2 + res1);

}