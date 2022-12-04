export let todos = [
  { id: 1, text: 'Make picture', checked: false },
  { id: 2, text: 'Make coffee', checked: false},
  { id: 3, text: 'Go walk', checked: false },
  { id: 4, text: 'Create task', checked: false },
];
// import {todos as myTodos} from './data.js';

export function getTodos() {
  return [...todos];
}
// let localTodos = getArray();