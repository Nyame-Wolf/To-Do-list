import './style.css';

import { todos, createToDo, addToDo } from './functionality/addRemoveEdit.js';

const input = document.querySelector('.desc');

todos.forEach(createToDo);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const completed = false;
    const description = document.querySelector('.desc').value;
    const newTodo = createToDo({ description, completed });
    addToDo(newTodo);
    input.value = '';
  }
});