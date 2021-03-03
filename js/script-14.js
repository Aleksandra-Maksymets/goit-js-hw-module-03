// Задача 13/41

// Выполни рефакторинг функции countProps(object)
// используя метод Object.keys() и, возможно, цикл for...of.

// ---Исходный код---

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }

// ---Решение---
function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;
  const keys = Object.keys(object);
  
  for (const key of keys) {
    propCount += 1;
  }

  return propCount;
  // Пиши код выше этой строки
}