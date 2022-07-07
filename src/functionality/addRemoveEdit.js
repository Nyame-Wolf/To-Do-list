export const ul = document.querySelector('.list-items');
export const todos = JSON.parse(localStorage.getItem('todos')) || [];
export const addToDo = (todo) => {
    const x = {
        description: todo.description,
        completed: todo.completed,
        index: todo.index,
    };
    todos.push(x);
    localStorage.setItem('todos', JSON.stringify(todos));
    return x;
};

export const createToDo = ({ description, completed, index }) => {
    const li = document.createElement('li');
    li.index = index;
    const checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    const item = document.createElement('span');
    item.appendChild(document.createTextNode(description));
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn-remove');
    removeBtn.innerHTML = '&#x3A7';
    li.append(checkbox, item, removeBtn);

    ul.appendChild(li);
    return ({ description, completed });

    removeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const index = li.index;
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.removeItem('li');
        li.remove();
    });
};