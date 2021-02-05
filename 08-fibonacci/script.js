/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c;
  if (n === 1) {
    c = a;
  } else if (n === 2) {
    c = b;
  }
  for (let i = 0; i < n - 2; i++) {
    c = a + b;
    a = b;
    b = c;
  };
  return c;
};


// function fibonacci(n) {
//   for (let i = 0; i <= n - 3; i++) {
//    let a = fibonacciNumber[i];
//    let b = fibonacciNumber[i+1];
//    let c = a + b;
//    fibonacciNumber.push(c);
//     console.log(fibonacciNumber);
//   };
//   console.log(`Для n = ${n}: ${fibonacciNumber[n]}`);
//   return fibonacciNumber[n-1];
// };

// function fibonacci(n) {
//   const fibonacciNumber = [0, 1];
//   for (let i = 0; i <= n - 3; i++) {
//    let a = fibonacciNumber[i];
//    let b = fibonacciNumber[i+1];
//    let c = a + b;
//    fibonacciNumber.push(c);
//    console.log(fibonacciNumber);
//   };
//   console.log(`Для n = ${n}: ${fibonacciNumber[n]}`);
//   return fibonacciNumber[n-1];
// };

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
