(
  function () {
    'use strict';

    let todos = [
      { id: 1, text: 'Make picture' },
      { id: 2, text: 'Make coffee'},
      { id: 3, text: 'Go walk' },
      { id: 4, text: 'Create task' },
    ];

    // --- --- ---
    // Об'єкти
    // об'єкт зберігається по ссилці, змінивши його поле, усі виводи console.log будуть показувати його останню актуальну версію

    // let obj = {
    //   id: 1,
    //   name: 'Text',
    // }
    //
    // console.log('obj 1: ', obj);
    //
    // obj.id = 2;
    //
    // console.log('obj 2: ', obj);

    // --- ---  ---
    // Взяти перший елемент з колекції
    // let textGet1 = document.getElementsByClassName('text')[0];
    // let textQuery1 = document.querySelector('.text');
    //
    // console.log('textGet: ', textGet1);
    // console.log('textQuery: ', textQuery1);
    //
    // // --- ---  ---
    // // Навішати клас на елемент
    // textGet1.classList.add('new');
    // textQuery1.classList.add('new');

    let input = document.querySelector('input');
    let button = document.querySelector('button');

    let text = document.querySelector('.text');
    let list = document.querySelector('.list');

    button.addEventListener('click', onclickButtonHandler );

    onCreateDefaultList();
    onCreateEventBlock();

    // --- ---  ---
    // Отримання колекції прописаних на html сторінці елементів
    // querySelectorAll - статичної, getElementsByClassName/Tag/Id - живої

    let listGet = document.getElementsByClassName('todo');
    let listQuery = document.querySelectorAll('.todo');

    function onclickButtonHandler() {
      if (input.value.trim() === '') return;

      text.innerText = input.value;

      let newTask = { id: todos.length + 1, text:  input.value };
      todos.push( newTask );

      let todosSelector = document.querySelector('.todos'); // в новостворений в блок з дефолтними задачами з масива пишемо
      todosSelector.insertAdjacentHTML('beforeend', `<div class="todo">${newTask.id} - ${newTask.text}</div>`);

      input.value = "";

      getCollectionsAfterAddTask();
    }

    function onCreateDefaultList() {
      let htmlTodos = todos.map((item) => `<div class="todo">${item.id} - ${item.text}</div>`);
      htmlTodos = htmlTodos.join('');
      list.insertAdjacentHTML('beforeend', `<div class="todos">${htmlTodos}</div>`);
    }

    function onCreateEventBlock() {
      let div = document.querySelector('.event__div');
      let event = document.querySelector('.event__btn');
      let submit = document.querySelector('.submit');

      div.addEventListener('click', () => { alert('Event: click on div') })

      // не пропускаємо подію далі, спрацює лише клік по кнопці, клік контейнера ні
      event.addEventListener('click', (e) => {  e.stopPropagation(); alert('Event: click on button');})

      // стандартну браузерну поведінку затираємо, button[submit] форми, перетираємо клік який відправляє
      submit.addEventListener('click', (e) => { e.preventDefault(); alert('Cancel form submit after click') })
    }

    function getCollectionsAfterAddTask() {
      // getElementsByClassName - жива колекція, раз записали колекцію в глобальну змінну і користуємося, ми завжди отримуватимемо останню актуальну версію
      console.log('listGet: ', listGet);

      // querySelectorAll - треба ще раз витягнути колекцію елементів, щоб отримати актуальну версію по селектору для подальшого використання в потрібному місці
      let listQuery = document.querySelectorAll('.todo');
      console.log('listQuery: ', listQuery);
    }
  }

)();