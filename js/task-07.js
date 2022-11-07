// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
const refs = {
  input: document.querySelector('#font-size-control'),
  tex: document.querySelector('#text'),
};
// const minSize = 16;
// const maxSize = 96;

const handleChangeFontSize = event => {
  refs.input = Number(event.target.value);
  refs.tex.style.fontSize = `${refs.input}px`;
};
refs.input.addEventListener('input', handleChangeFontSize);
