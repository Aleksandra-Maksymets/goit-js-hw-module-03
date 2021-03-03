// Задача 16/41

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.
// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
const values = Object.values(salaries);
  for (const value of values) {
  totalSalary += value;
  }
  
  // Пиши код выше этой строки
  return totalSalary;
}