{
  'use strict';

  let todos = [
    { id: 1, text: 'Make picture', checked: false },
    { id: 2, text: 'Make coffee', checked: false},
    { id: 3, text: 'Go walk', checked: false },
    { id: 4, text: 'Create task', checked: false },
  ];

  let input = document.querySelector('input[type="text"]');
  let addBtn = document.querySelector('button.add');

  let list = document.querySelector('.list');
  let message = document.querySelector('.message');

  addBtn.addEventListener('click', addTask );
  renderList();

  /**
   * Set state of message about empty list
   */
  function setMessageState() {
    message.style.display = todos.length ? 'none' : 'block';
  }

  /**
   * Render all tasks list basics on todos array data
   */
  function renderList() {
    setMessageState();

    if (!todos.length) return;

    let htmlTodos = todos.map((item) =>
      `<div class="todo" itemid="${item.id}"> 
          <input type="checkbox" 
                 class='check'
                 ${item.checked ? 'checked' : ''}
          /> 
          <div style="${item.checked === true ? 'text-decoration: line-through' : 'text-decoration: none'}">
            ${item.id} - ${item.text}
          </div> 
          <button class="edit">
            ...
          </button>
          <button class="remove">
            X
          </button>
      </div>`);

    list.innerHTML = `${htmlTodos.join('')}`;

    addRemoveListeners();
    addEditListeners();
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
  function addEditListeners() {
    document.querySelectorAll('input.check').forEach((elem) => addEditListener(elem))
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
    todos.push( newTask );
    setMessageState();

    list.insertAdjacentHTML('beforeend',
      `<div class="todo" itemid="${newTask.id}">
              <input checkboxid="${newTask.id}" type="checkbox" class='check' ${newTask.checked ? 'checked' : ''}/>
              <div style=${newTask.checked ? "text-decoration: line-through" : "" }>
                ${newTask.id} - ${newTask.text}
              </div>
              <button editid="${newTask.id}"] class="edit">
                ...
              </button>
              <button removeid="${newTask.id}" class="remove">
                X
              </button>
            </div>`
    );

    input.value = "";

    let newTaskRemoveBtn = document.querySelector(`button[removeid="${newTask.id}"]`);
    let newTaskEditBtn = document.querySelector(`button[editid="${newTask.id}"]`);
    let newTaskCheckboxInput = document.querySelector(`input[checkboxid="${newTask.id}"]`);

    addRemoveListener(newTaskRemoveBtn);
    addEditListener(newTaskEditBtn);
    addCheckListener(newTaskCheckboxInput);

    setMessageState();
  }

  /**
   * Add listener on remove task button
   */
  function addRemoveListener(elem) {
    elem.addEventListener('click', (e) => {
      let id = e.target.closest('.todo').getAttribute('itemid');
      todos = todos.filter((todo => +todo.id !== +id));
      e.target.closest('.todo').remove();

      setMessageState();
      renderList();
    });
  }

  /**
   * Add listener on edit task button
   */
  function addEditListener(elem) {
    elem.addEventListener('click', (e) => {
      console.log('edit task listener e', e);

      setMessageState();
      renderList();
    });
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
}