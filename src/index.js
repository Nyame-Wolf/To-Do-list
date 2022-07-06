import './style.css';

const toDos = [
  {
    description: 'wash the dishes',
    completed: true,
    index: 0,
  },
  {
    description: 'complete To Do list project',
    completed: true,
    index: 1,
  },

  {
    description: 'Take a shower',
    completed: false,
    index: 2,
  },

  {
    description: 'clean the car',
    completed: true,
    index: 3,
  },

  {
    description: 'go for shopping',
    completed: false,
    index: 4,
  },

];
const ul = document.querySelector('.list-items');
toDos.forEach((todo) => {
  const li = document.createElement('li');
  const x = document.createElement('INPUT');
  x.setAttribute('type', 'checkbox');
  x.checked = todo.completed;
  const y = document.createElement('span');
  y.innerText = todo.description;
  li.append(x, y);

  ul.appendChild(li);
});