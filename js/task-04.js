// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// створюєм шаблон б оголошуєм початкове значення та крок, передаєм значення для колбека в майбутньому.
// const CountNumber = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this._refs = this._getRefs(rootSelector);
//   this._bindEvents();
// };

// CountNumber.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.decrementBtn = document.querySelector("[data-action='decrement']");
//   refs.incrementBtn = document.querySelector("[data-action='increment']");
//   refs.value = document.querySelector('#value');
//   return refs;
// };
// // Ставимо слухача на кнопки з decrement та increment.
// CountNumber.prototype._bindEvents = function () {
//   this._refs.decrementBtn.addEventListener('click', () => {
//     console.log('CountNumber.prototype._bindEvents -> this', this);
//     this.decrement();
//     this.updateValue();
//   });
//   this._refs.incrementBtn.addEventListener('click', () => {
//     console.log('CountNumber.prototype._bindEvents -> this', this);
//     this.increment();
//     this.updateValue();
//   });
// };
// // Створюєм оновлення на інтерфейсі значення value
// CountNumber.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };
// // Створюєм змінну для decrement з кроком 1
// CountNumber.prototype.decrement = function () {
//   this._value -= this._step;
// };
// // створюєм змінну для increment з кроком 1
// CountNumber.prototype.increment = function () {
//   this._value += this._step;
// };
// // Створення нової змінної в яку будемо передавати значення
// // майбутніх колбеків для додаткових лічильників
// const counter1 = new CountNumber({});

const display = document.querySelector('#counter');
const incrementBtn = document.querySelector("[data-action='increment']");
const decrementBtn = document.querySelector("[data-action='decrement']");
const value = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const counter = () => {
  counterValue = 0;
  value.textContent = counterValue;
};
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
