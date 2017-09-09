const AGE = 33;
let output = "Неизвестный возраст";

if (AGE <= 17)
    output = "Вам работать еще рано - учитесь.";
else if (AGE > 17 && AGE <= 59)
    output = "Вам еще работать и работать.";
else if (AGE > 59)
    output = "Вам пора на пенсию.";

console.log(output);