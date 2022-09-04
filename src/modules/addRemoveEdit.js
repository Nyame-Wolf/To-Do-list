import trash from "../assets/icons8-waste-24.png";
import * as localStorage from "./localStorage.js";

const ul = document.querySelector(".list-items");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
export const getToDos = () => todos;
export const setToDos = (newTodos) => {
  todos = newTodos;
};

export const addToDo = (todo) => {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  return todo;
};

export const removeTodos = (predicate, todos) =>
  todos.filter(predicate).map((todo, index) => {
    todo.index = index + 1;
    return todo;
  });

export const toggleStatus = (todo, status) => {
  todo.completed = status;
  return todo;
};

export const createToDo = ({ description, completed, index }) => {
  const li = document.createElement("li");
  li.classList.add("container");
  const checkbox = document.createElement("INPUT");
  checkbox.classList.add("check");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = completed;
  const item = document.createElement("span");
  item.classList.add("content");
  item.appendChild(document.createTextNode(description));
  item.contentEditable = true;
  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "image");
  removeBtn.setAttribute("src", trash);
  removeBtn.classList.add("btn-remove");
  li.append(checkbox, item, removeBtn);

  ul.appendChild(li);
  checkbox.addEventListener("change", () => {
    const todo = todos.find((todo) => todo.index === index);

    toggleStatus(todo, checkbox.checked);

    // todo.completed
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  item.addEventListener("input", (e) => {
    const todo = todos.find((todo) => todo.index === index);
    todo.description = e.target.innerHTML;
    localStorage.setItem("todos", JSON.stringify(todos));
  });
  removeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newTodos = removeTodos((todo) => todo.index !== index, todos);

    localStorage.setItem("todos", JSON.stringify(newTodos));
    setToDos(newTodos);
    // eslint-disable-next-line no-use-before-define
    populateTodos();
  });
  const todo = { description, completed, index };
  addToDo(todo);
  return todo;
};

export const populateTodos = () => {
  let child = ul.lastElementChild;
  while (child) {
    ul.removeChild(child);
    child = ul.lastElementChild;
  }
  const oldTodos = getToDos();
  setToDos([]);
  oldTodos.forEach(createToDo);
};
