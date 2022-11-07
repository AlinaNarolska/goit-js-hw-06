// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientsEl = document.querySelector('#ingredients');

for (const obj of ingredients) {
  const newIngredientsLi = document.createElement('li');
  newIngredientsLi.textContent = obj;
  newIngredientsLi.classList.add('item');
  ingredientsEl.append(newIngredientsLi);
}
