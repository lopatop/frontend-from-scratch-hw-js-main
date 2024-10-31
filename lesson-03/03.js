// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

const number1 = 1
const number2 = 1
const number3 = 1

function findLargest(a, b, c) {

    if (a > b && a > c) {
        // console.log(a);
        return a; 
    } else if (b > a && b > c) {
        // console.log(b);
        return b;
    } else {
        // console.log(c);
        return c; 
    }

}

const morNumber = findLargest(number1, number2, number3);
