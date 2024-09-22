// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

const number1 = +prompt('number1');
const number2 = +prompt('number2');

function calcAverage(a, b) {
    return (a + b) / 2;
}
let result = calcAverage(number1, number2);
console.log(result);

