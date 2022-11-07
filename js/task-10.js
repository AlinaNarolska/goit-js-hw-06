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

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('.controls');

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = size + i * 10;
    const div = document.createElement('div');
    div.style.cssText = `width: ${size} px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    boxes.appendChild(div);
  }
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
createBtn.addEventListener('click', createBoxes);
destroyBoxes.addEventListener('click', destroyBoxes);
