/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}



// function reverseWords(str) {
//   const arr =  str.split(' ');
//   let box;
//   for(var i=0,j=arr.length-1; i<j; i++,j--)
//   {
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = box;
//   }
//   return arr.join(' ')
// }


// function reverseWords(str) {
//   const arr =  str.split(' ');
//   let i = arr.length;
//   let newArr  = [];
//   while (i>0) {
//   newArr.push(arr.pop());
//   i--;
//   }
//   return newArr.join(' ');
// }

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"
