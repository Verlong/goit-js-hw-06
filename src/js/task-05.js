// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//         у спані повинен відображатися рядок "Anonymous".
const refs = {
  inputValue: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};
//другой вариант написания
// const inputValue = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');
refs.inputValue.addEventListener('input', onImputChange);

function onImputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === '') {
    refs.nameOutput.textContent = 'Anonymous';
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
}
