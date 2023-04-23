// HTML містить порожній список ul#ingredients.
// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
const ulElement = document.querySelector('#ingredients');
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.

const liElements = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  return liItem;
});

// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
ulElement.append(...liElements);
