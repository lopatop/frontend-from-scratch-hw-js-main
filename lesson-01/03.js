/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let numberOdd = 1;
let numberSum = 0;
while (numberOdd <= 20) {
    if (numberOdd % 2 !== 0)
        numberSum = numberSum + numberOdd;
    numberOdd++;
    document.write(numberSum, '<br>');
}
let sum = numerSum; 
document.write(sum);
