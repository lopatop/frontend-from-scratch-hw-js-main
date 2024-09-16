/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade
// your code
if (score <= 49 && score > 0) {
    grade = 'F'
    document.write(grade)
} else if (score <= 69 && score >= 50) {
    grade = 'D'
    document.write(grade)
} else if (score <= 79 && score >= 70) {
    grade = 'C'
    document.write(grade)
} else if (score <= 89 && score >= 80) {
    grade = 'B'
    document.write(grade)
} else if (score <= 100 && score >= 90) {
    grade = 'A'
    document.write(grade)
}
    else {
        alert ('Введите число от 0 до 100');

    }

