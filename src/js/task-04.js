// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counter = document.querySelector('#counter');
const valueIdSpan = document.querySelector('#value');
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueIdSpan.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueIdSpan.textContent = counterValue;
});
