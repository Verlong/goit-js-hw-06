// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categIdList = document.querySelector('#categories');
const categItems = categIdList.querySelectorAll('.item');
console.log(`Number of categories: ${categItems.length}`);

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
categItems.forEach(item => {
  const categTitle = item.querySelector('h2').textContent;
  const categElemLi = item.querySelectorAll('li').length;
  console.log(`Category: ${categTitle}\n Elements: ${categElemLi}`);
});
