// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

const number1 = +prompt('Введите первое число');
const number2 = +prompt('Введите второе число');
const number3 = +prompt('Введите третье число');

function findLargest(a, b, c) {

    if (a > b && a > c) {
        console.log(a);
        return a; 
    } else if (b > a && b > c) {
        console.log(b);
        return b;
    } else {
        console.log(c);
        return c; 
    }

}

const morNumber = findLargest(number1, number2, number3);
