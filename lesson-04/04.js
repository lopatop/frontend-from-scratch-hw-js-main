/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

// let str = prompt("Строка, символы которой нужно удвоить");

function doubleEachCharacter(str) {
    if (str === null || str === undefined) {
        return ""; 
    } 
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

// console.log(doubleEachCharacter(str));





