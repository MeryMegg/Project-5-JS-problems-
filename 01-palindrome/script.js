/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
*/




function palindrome(str) {
  return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
}

//Другие варианты решения
/*
  function palindrome(str) {
    str = str.toLowerCase().split('');
    let charStr = str.filter(function(elem) {
      return (elem >= 'а' && elem <= 'я') || (elem >= 'a' && elem <= 'z');
    });
    const lastIndex = charStr.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
      if (charStr[i] !== charStr[lastIndex - i]) {
        return false;
      }
    }
    return true;
  }
  */


// function palindrome(str) {
//   str = str.toLowerCase().split(''); 
//   str = str.filter(function(elem) {
//     return (elem >= 'а' && elem <= 'я') || (elem >= 'a' && elem <= 'z');
//   });
//   str = str.join('');
//   let newStr = str.split('').reverse().join('');  
//   return str.localeCompare(newStr) === 0 ? true : false;
// }

// function palindrome(str) {
//   str = str.toLowerCase().replace(/[^а-яa-z]/gi, '');
//   const lastIndex = str.length - 1;
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[lastIndex - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 *
 * palindrome('О, лета тело!'); // true
 *
*/

