// Задача 32/41

// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов,
// которые больше чем заданное число.Это число должно быть первым параметром функции.

// // Пиши код ниже этой строки
// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
//   // Пиши код выше этой строки
// }


// ---Решение---

// Пиши код ниже этой строки
function addOverNum(a, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > a){
    total += arg;
    }
    
  }

  return total;
  // Пиши код выше этой строки
}