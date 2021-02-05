/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  return str.replace(/(^|\s)\S/gi, function (a) {
    return a.toUpperCase()
  });
};

// function capitalize(str) {
//   const arr = str.split(' ');  
//   const filterArr = arr.filter(function (el) {
//   return el !== '';
//   });  
//   const newArr = [];
//   let res = 0;
//   let elem;
//   for (let i = 0; i < filterArr.length; i++) {
//     res = (filterArr[i][0].toUpperCase() + filterArr[i].substr(1));  
//     newArr.push(res);
//   };  
//   return newArr.join(' ');
// };





// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"