// Задача 41/41

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк,
// а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на
// newName в массиве potions.

// ---Исходный код---
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Зелья ${potionName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};


// ---Решение---
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Зелье ${potionName} уже есть в инвентаре!`;
    }

    this.potions.push(potionName);
  },
    removePotion(potionName) {
        const { potions } = this;

        for (i = 0; i < potions.length; i += 1) { 
            const {name} = potions[i];

            if (potionName === name) {
                 return potions.splice(i, 1);;
            }
        }
    },
  updatePotionName(oldName, newName) {
     const { potions } = this;

        for (i = 0; i < potions.length; i += 1) { 
            const {name} = potions[i];

            if (oldName === name) {
                 return potions[i].name = newName;;
            }
        }
    
    },
  // Пиши код выше этой строки
};