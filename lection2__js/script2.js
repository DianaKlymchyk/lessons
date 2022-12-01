{
  let container = document.querySelector('#container');
  console.log('container: ', container);

  let title = document.createElement('div');
  title.innerText = 'Title'
  title.style.margin = '30px 0'

  title.addEventListener('click', (e) => {
      alert('title click');
    }
  )

  let text = document.createElement('div');
  text.innerText = 'Text'
  text.style.margin = '30px 0'

  text.addEventListener('click', (e) => {
      alert('text click');
    }
  )

  container.appendChild(title)
  container.appendChild(text)

  const users = [ {id: 0, name: 'Valera1', age: 20 }, {id: 1, name: 'Valera2', age: 20 }, {id: 2, name: 'Valera3', age: 20 } ];

  const getStyle = (idx) => {
    if (idx % 2 === 0) {
      return "color: red";
    } else if (idx % 2 === 1) {
      return  "color: blue";
    } else {
      return "";
    }

    // надлишково

    // else {
      // return;
    // }
    // return;

    // return; === > undefined (функція без return)
  }

  let usersEl = users.map((user, idx) => {
    // return `<div class="${'user' + user.id}" style="${idx % 2 === 0 ? "color: red" : "color: blue"}">
    return `<div class="${'user' + '_' + user.id}" style="${getStyle(idx)}">
              ${user.name}
              <button>Remove</button>
            </div>`
  })

  container.innerHTML = '';
  container.innerHTML = usersEl.join(' ');

  let form = document.forms[0];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let elements = e.target.elements;
    console.log(elements);

    const name = elements.name;
    const surname = elements.surname;

    let user = {};

    for (let item of elements) {
      console.log(item);
      if (item.type === 'submit') {
        continue;
      }
      user[item.name] = item.value;
    }

    console.log('User: ', user);

    // на виході така структура

    // let user = {
    //   [name.name]: name.value,
    //   [surname.name]: surname.value,
    // }

  })
}