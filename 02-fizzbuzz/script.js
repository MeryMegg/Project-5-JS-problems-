/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/


function fizzBuzz(num) {
  for (let i = 1; i < num + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else
      console.log(i);
  };
  return;
};

// function fizzBuzz(num) {
//   for (let i = 1; i < num+1; i++) {
//     switch (true) {
//       case ((i % 3 === 0) && (i % 5 === 0)):
//       console.log('fizzbuzz');
//       break;
//
//       case (i % 3 === 0):
//       console.log('fizz');
//       break;
//
//       case (i % 5 === 0):
//       console.log('buzz');
//       break;
//
//       default:
//       console.log(i);
//     }
//   }
//   return;
// }


//Подсмотренный вариант:
// function fizzBuzz(num) {
//   for (let i = 1; i < num+1; i++) {
//     let res = '';
//     if (i % 3 === 0) {
//      res += 'fizz';
//     }
//     if (i % 5 === 0) {
//      res += 'buzz';
//     }
//     res = (res.length === 0) ? i : res;
//     console.log(res);
//   };
//   return;
// };



// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);
