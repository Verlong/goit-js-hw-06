// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input  type="text"  id="validation-input"  data-length="6"  placeholder="Please enter 6 symbols"/>

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', e => {
  const value = e.target.value;
  console.log(value);
  if (
    value.length < Number(inputValue.dataset.length) ||
    value.length > Number(inputValue.dataset.length)
  ) {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
  } else {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
  }
});
