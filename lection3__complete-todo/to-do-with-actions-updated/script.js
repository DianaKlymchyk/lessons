'use strict';

let todos = [
  { id: 1, text: 'Make picture', checked: false },
  { id: 2, text: 'Make coffee', checked: false},
  { id: 3, text: 'Go walk', checked: false },
  { id: 4, text: 'Create task', checked: false },
];

/**
 * Remove item from list
 */
const removeItem = (e) => {
  let id = e.target.closest('.todo').getAttribute('itemid');
  todos = todos.filter((todo => +todo.id !== +id));
  e.target.closest('.todo').remove();
  setMessageState();
}

let input = document.querySelector('input[type="text"]');
let addBtn = document.querySelector('button.add');

let list = document.querySelector('.list');
let message = document.querySelector('.message');

addBtn.addEventListener('click', addTask);
renderList();

/**
 * Set state of message about empty list
 */
function setMessageState() {
  // import {todos2 as todos333} from './data.js';
  message.style.display = todos.length ? 'none' : 'block';
}

// console.log(todos333) немає доступу

/**
 * Render all tasks list basics on todos array data
 */
function renderList() {
  setMessageState();
  if (!todos.length) return;

  list.innerHTML = '';

  // Create array with div list
  todos.forEach((item) => {
    let listItem = `<div class="todo" itemid="${item.id}"> 
      <input type="checkbox" 
             class='check'
             ${item.checked ? 'checked' : ''}
      /> 
      <div style="${item.checked === true ? 'text-decoration: line-through' : 'text-decoration: none'}">
        ${item.id} - ${item.text}
      </div> 
      <button class="remove">
        X
      </button>
  </div>`;

    list.insertAdjacentHTML('beforeend', listItem);
  });

  addRemoveListeners();
  addCheckListeners();
}

/**
 * Add remove event listeners on all task remove buttons
 */
function addRemoveListeners() {
  document.querySelectorAll('button.remove').forEach((elem) => addRemoveListener(elem))
}

/**
 * Add check event listeners on all task check buttons
 */
function addCheckListeners() {
  document.querySelectorAll('input.check').forEach((elem) => addCheckListener(elem))
}

/**
 * Add new task to the list
 */
function addTask() {
  const value = input.value.trim();
  if (value === '') return;

  let newTask = {
    id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
    text: input.value, checked: false
  };

  todos.push(newTask);
  setMessageState();

  list.insertAdjacentHTML('beforeend',
    `<div class="todo" itemid="${newTask.id}">
          <input checkboxid="${newTask.id}" type="checkbox" class='check' ${newTask.checked ? 'checked' : ''}/>
          <div style=${newTask.checked ? "text-decoration: line-through" : ""}>
            ${newTask.id} - ${newTask.text}
          </div>
          <button removeid="${newTask.id}" onclick='removeItem(event)'
            class="remove">
            X
          </button>
        </div>`
  );

  input.value = "";

  // console.log('list', list)

  let newTaskCheckboxInput = document.querySelector(`input[checkboxid="${newTask.id}"]`);
  addCheckListener(newTaskCheckboxInput);

  // Change this 'eventListeners' on 'onclick' but onclick does not work with ES-modules
  // let newTaskRemoveBtn = document.querySelector(`button[removeid="${newTask.id}"]`);
  // addRemoveListener(newTaskRemoveBtn);

  setMessageState();
}

/**
 * Add listener on remove task button
 */
function addRemoveListener(elem) {
  elem.addEventListener('click', removeItem.bind(this));
}

/**
 * Add listener on check task input
 */
function addCheckListener(elem) {
  elem.addEventListener('click', (e) => {
    let id = e.target.closest('.todo').getAttribute('itemid');
    let todo = todos.find((todo => +todo.id === +id));
    todo.checked = !todo.checked;

    renderList();
  });
}
