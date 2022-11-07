// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  textInput: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
refs.textInput.addEventListener('input', onInputFull);

function onInputFull(event) {
  refs.output.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}
