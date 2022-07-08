const ul = document.querySelector(".list-items");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
export const getToDos = () => todos;
export const setToDos = (newTodos) => {
  todos = newTodos;
};

export const addToDo = (todo) => {
  const x = {
    description: todo.description,
    completed: todo.completed,
    index: todo.index,
  };
  todos.push(x);
  localStorage.setItem("todos", JSON.stringify(todos));
  return x;
};

export const removeTodos = (predicate, todos) =>
  todos.filter(predicate).map((todo, index) => {
    todo.index = index + 1;
    return todo;
  });

export const createToDo = ({ description, completed, index }) => {
  const li = document.createElement("li");
  const checkbox = document.createElement("INPUT");
  checkbox.classList.add("check");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = completed;
  const item = document.createElement("span");
  item.classList.add("content");
  item.appendChild(document.createTextNode(description));
  item.contentEditable = true;
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn-remove");
  removeBtn.innerHTML = "&#x3A7";
  li.append(checkbox, item, removeBtn);

  ul.appendChild(li);
  checkbox.addEventListener("change", () => {
    const todo = todos.find((todo) => todo.index === index);

    if (checkbox.checked) {
      todo.completed = true;
    } else {
      todo.completed = false;
    }
    // todo.completed
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  item.addEventListener("input", (e) => {
    const todo = todos.find((todo) => todo.index === index);
    todo.description = e.target.outerText;
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newTodos = removeTodos((todo) => todo.index !== index, todos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setToDos(newTodos);
    // eslint-disable-next-line no-use-before-define
    refreshToDos();
  });
  return { description, completed, index };
};

export const refreshToDos = () => {
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
  getToDos().forEach(createToDo);
};
