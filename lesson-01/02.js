/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code

        let number = 1;
        let numberCorrect = 1;
        while (numberCorrect <= 10) {
            number = number * numberCorrect
            numberCorrect++
            //   document.write(number, "<br>");
        }
        let factorial = number;
        document.write(factorial);
