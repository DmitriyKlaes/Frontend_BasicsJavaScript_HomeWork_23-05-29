// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) console.log(`${i} - это ноль`);
    else console.log((i % 2 === 0) ? `${i} - четное число` : `${i} - нечетное число`);
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7];
arrayNumbers.splice(3, 2);
console.log(arrayNumbers);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function pushToArrayRandomNumbers(array, countNumbers, minNumber, maxNumber) {
    for (let i = array.length; i < countNumbers; i++) {
        array.push(getRandomInt(minNumber, maxNumber));
    }
}

const sumArray = (array) => array.reduce((acc, num) => acc + num, 0);

const minArrayValue = (array) => array.reduce((a, b) => Math.min(a, b));

const findNumberInArray = (array, number) => number === array.find(a => a === number);


const arrayRandomNumbers = [];
pushToArrayRandomNumbers(arrayRandomNumbers, 5, 0, 9);
console.log(arrayRandomNumbers);
console.log(sumArray(arrayRandomNumbers));
console.log(minArrayValue(arrayRandomNumbers));
console.log(findNumberInArray(arrayRandomNumbers, 3));


// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for),
// как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let x = 'x';
for (let i = 0; i < 20; i++) {
    console.log(x);
    x = x + 'x';
}