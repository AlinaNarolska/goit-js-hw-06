// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку
// Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const controlsEl = document.querySelector('.controls');
const boxes = document.querySelector('#boxes');

function inputChange() {
  const countNum = inputEl.valueAsNumber;
  const numBoxes = createBoxes(countNum);
  updatePages(numBoxes);
}

function createBoxes(countNum) {
  const numBoxes = [];
  let size = 30;
  for (let i = 0; i < countNum; i += 1) {
    const elem = `<div class="item" style="width: ${size}px;
    height: ${size}px;
    background:${getRandomHexColor()}"></div>`;
    size += 10;
    numBoxes.push(elem);
  }
  return numBoxes.join('');
}

function updatePages(numBoxes = '') {
  boxes.innerHTML = numBoxes;
}

createBtn.addEventListener('click', inputChange);
destroyBtn.addEventListener('click', () => {
  inputEl.value = '';
  updatePages();
});
