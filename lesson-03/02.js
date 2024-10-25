// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

// let number = +prompt('Введите число');

function isEven(a) {
    if (a % 2 === 0) {
        return true;

    } else {
        return false
    }
}
let result = isEven(number);
console.log(result);

