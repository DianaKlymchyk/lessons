// -------------------------------------------------------------------
// Export and import modules
// -------------------------------------------------------------------


// Module включають свій scope і use strict;
// <script type="module" src="additional.js"></script>


// let todos = [
//   { id: 1, text: 'Make picture', checked: false },
//   { id: 2, text: 'Make coffee', checked: false},
//   { id: 3, text: 'Go walk', checked: false },
//   { id: 4, text: 'Create task', checked: false },
// ];

// import {todos as todos} from "./data.js";



// 'use strict'; в модулі і так

// import {todos} from './data.js'; // псевдонім
// import {todos2 as todos} from './data.js'; // псевдонім
// import {todos as todos 222} from './data.js'; // псевдонім

//todos.push({ id: 100, text: 'Make picture 100', checked: false });
//todos.push({ id: 1000, text: 'Make picture 1000', checked: false });

//console.log(todos); // буде мінятися ісходний масив

//let newArr = [...todos22];
//newArr.push({ id: 1000, text: 'Make picture 1000 ', checked: false });
//console.log(todos);

//console.log(todos); // буде мінятися новий, повністю скопійований масив, ісходний todos не зміниться



// html which is generated with onclick does not work with ES-modules
// Recommend use an event listener




// -------------------------------------------------------------------
// Dom element with text
// -------------------------------------------------------------------


// let myDiv = document.createElement('div').innerText = 'Div text'; // в змінну запишеться текст
// let myDiv = document.createElement('div');
// myDiv.innerText = 'Div text';
// myDiv.innerText = '<p>Div text</p>'; // теги буде видно у вигляді тексту

// let text = document.createTextNode('Div text'); // створиться текстовий вузол, який можна append/prepend
// let text = document.createTextNode('<p>Div text</p>'); // теги буде видно у вигляді тексту
// myDiv.appendChild(text);
// myDiv.appendChild(text);

// Ще один варіант: myDiv.insertAdjacentText
// Застосовувати для створення декількох текстових вузлів, що ідуть один за одним зручніше

// console.log(myDiv);
// let title = document.querySelector('.title');
// title.appendChild(myDiv);





// -------------------------------------------------------------------
// Events
// -------------------------------------------------------------------


// object.onclick=function( event ){ };
// object.onclick = null;

// object.addEventListener('click', onClickHandler1);
// object.addEventListener('click', onClickHandler2);

// object.removeEventListener('click', onClickHandler1);





// -------------------------------------------------------------------
// Вивести список з JS в DOM
// -------------------------------------------------------------------


// 1 спосіб Пройшлися по масиву даних і створили список з доп insertAdjacentHTML
// Для JS
// todos.forEach((item) => {
//   let listItem = `<div class="todo" itemid="${item.id}">Item</div>
//   list.insertAdjacentHTML('beforeend', listItem);
// });


// 2 спосіб - через createElement/appendChild
// - найлегший для машини, бо не треба парсити текст в елементи, створені елементи відразу вставляються (але це не принципово)


// 3 спосіб Пройшлися по масиву даних і створили список div елементів, потім вставили в контейнер
// Дуже схожий спосіб застосовується Для React

// function createList (list) { // можна зробити універсальною функцією, експортувати, передати аргумент list і спрацює
//
//   let listItem = todos.map((item) => {
//
//     return (`<div class="todo" itemid="${item.id}">
//           <input type="checkbox"
//                  class='check'
//                  ${item.checked ? 'checked' : ''}
//           />
//           <div style="${item.checked === true ? 'text-decoration: line-through' : 'text-decoration: none'}">
//             ${item.id} - ${item.text}
//           </div>
//           <button class="edit">
//             ...
//           </button>
//           <button class="remove">
//             X
//           </button>
//       </div>`
//     );
//   });
//
//   // console.log('listItem', listItem);
//   list.innerHTML = `${listItem.join('')}`; // , -> ''
// }




// -------------------------------------------------------------------
// Створити елемент як Node і навішати клік
// -------------------------------------------------------------------

// let taskItem = document.createElement('div');
// taskItem.classList.add('todo');
// taskItem.setAttribute('itemid', newTask.id);
// і т.д.
// taskItem.addEventListener('click', () => { console.log('click item')} )
// taskItem.onclick = function( event ){ };