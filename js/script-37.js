// Задача 37/41

// Добавь объекту atTheOldToad метод getPotions(),
// который просто возвращает значение свойства potions.

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  
  getPotions(potions){
  return this.potions;
    
  },
  // Пиши код выше этой строки
};
console.log(atTheOldToad.getPotions());