// Документ hw_3.pdf

/*3. С помощью цикла найдите сумму чисел от 0 до 100. */

{

  let sum = 0;

  for (let i = 0; i <= 100; i++) {

    sum += i;

  }

  console.log('Сумма чисел от 0 до 100 = ' + sum);

}

console.log('------------------------');


/*4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 
(1+2+3). */

{

  let i = 1;
  let sum = 0;
  let count = 1;

  while (i <= 5) {

    sum += i;
    console.log(`Сумма [${count}] равняется = ${sum}`);
    i++;
    count++;

  }

}

console.log('------------------------');


/*7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет 
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых 
для этого (итерация - это проход цикла), и запишите его в переменную num. */

{

  let n = 1000;
  let num = 0;
  let result;

  while (n >= 50) {

    result = n / 2;
    n = result;
    num++;
  
  }

  console.log(`Итоговое число = ${result}, понадобилось ${num} итераций`);

}

console.log('------------------------');

/*8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до 
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите 
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не 
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь 
может ввести отрицательное значение. */

// {

//   let i = 0;
//   let sum = 0;

//   while (true) {

//     let input = prompt('Введите ваше число');
//     let num = +input;

//     if (input == '' || input == '0' || input == null || num < 0) break;

//     sum += num;
//     i++;

//   }

//   let average = sum / i;

//   console.log(`Общая сумма = ${sum}, среднее арифметическое = ${average}`);

// }

console.log('------------------------');



// Документ Tasks_Loop.pdf

/*1. Выведите с помощью цикла на экран числа от 1 до 50. Решите задачу с 
помощью while и for */

// {
//   for (let i = 1; i <= 50; console.log(i), i++);
// }

// {
//   let i = 1;

//   while (i <= 50) {
//     console.log(i);
//     i++;
//   }

// }

console.log('------------------------');

/*4. Найдите сумму чисел от 1 до 50, а также сумму этих же чисел, исключая 
четные.  */

let sum = 0;
let evenSum = 0;

for (let i = 1; i <= 50; i++) {

  sum += i;

  if (i % 2 != 0) evenSum += i;

}

console.log('Сумма чисел от 1 до 50 = ' + sum);
console.log('Сумма чисел от 1 до 50, исключая четные = ' + evenSum);


console.log('------------------------');


/*7. Найти самую большую цифру в целом числе. */

{

  let number = '27803';
  let i = 0;
  let currentNum = 0;
  let max;

  while (number[i] != undefined) {

    currentNum = +number[i];
    
    if (max == undefined) {
      max = currentNum;
    }

    if (max < currentNum) max = currentNum;

    currentNum = 0;
    i++;

  }

  console.log(`Самая большая цифра в заданном числе = ${max}`);


}

console.log('------------------------');

/*10. Нарисуйте в консоле браузера прямоугольный треугольник заполненный
символом #. */

{

    let hashtag = '#';

    for (let i = 0, line = ''; i <= 5; i++) {

      for (let j = 0; j <= 5;) {

          line += hashtag;
          j ++;
          break;

      }

      console.log(line);

    }

}

console.log('------------------------');

/*11. Напишите программу, которая проверяет правильность ввода пароля от
пользователя. Важно, чтобы пароль соотв. сл. требованиям: длина пароля от 6
символов; пароль должен состоять только из лат. символов; содержать
минимум 1 число, 1 большой символ и любой знак из списка: _*&-#$.
*/

let userPass = prompt('Пожалуйста, ввдите ваш пароль', 'feD3_$');

let count = 0;
let passLength;
let passDigit = 0;
let passSymbols = '_*&-#$';
let passSymbol = false;
let passUpperCase = false;
let passLatin = false;
let isInvalid = false;


while (userPass[count] != undefined) {

    let char = userPass[count];

    if (char >= '0' && char <= '9') {
      passDigit++;
    }

   if (char >= 'A' && char <= 'Z') {
      passUpperCase = true;
   } 

   if (char >= 'a' && char <= 'z') {
      passLatin = true;
   } 

   let j = 0;

   for (; passSymbols[j] != undefined; j++) {
      if (passSymbols[j] == char) {
        passSymbol = true;
        break;
      }
   }

   if (
    !((char >= '0' && char <= '9') ||
    (char >= 'A' && char <= 'Z') || 
    (char >= 'a' && char <= 'z') || 
    passSymbols[j] == char)) {

      isInvalid = true;
      break;
    }

    count++;
    passLength = count;

}

if (passLength >= 6 && passDigit >= 1 && passUpperCase && passLatin && passSymbol && !isInvalid) {
      console.log('Добро пожаловать');
} else console.log('Неверный пароль');

console.log('------------------------');

/*13. Найти число с максимальной суммой цифр среди чисел: 56,987,103,9011,45.
*/

{

  let string = '56,987,103,9011,45';
  let glue = '';
  let sum;
  let maxSum;

  for (let i = 0; string[i] != undefined; i++) {

    if (string[i] != ',' && string[i] != undefined) {

      glue += string[i];

    } else { 

      sum = 0;
    
      for (let j = 0; glue[j] != undefined; j++) {

        sum += +glue[j];
      
      }

      if (maxSum == undefined) {
        maxSum = sum;
      }
             
      if (maxSum < sum) maxSum = sum;

      glue = '';

    }

  }

  console.log(`Максимальная сумма цифр = ${maxSum}`);

}

console.log('------------------------');


/*14. Вывести на экран «прямоугольник», образованный из двух видов символов. 
Контур прямоугольника должен состоять из одного символа, а в «заливка» — из 
другого.*/

{

  let hashtag = '#';
  let zero = '0';
  let line = '';

  for (let i = 0; i <= 5; i++) {

        
    for (let j = 0; j <= 29; j++) {

      line += hashtag;

      if (i >= 1 && i <= 4) {

        line = hashtag;

        for (let k = 1; k <= 28; k++) {
          line += zero;
        }

        line += hashtag;

      }
            
    }

    document.write(line + '<br>');
        
    line = '';

  }
}

