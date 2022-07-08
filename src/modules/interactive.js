import {
  getToDos,
  setToDos,
  refreshToDos,
  removeTodos,
} from "./addRemoveEdit.js";

const clearAllItems = () => {
  const todos = getToDos();
  const newToDos = removeTodos((todo) => !todo.completed, todos);
  localStorage.setItem("todos", JSON.stringify(newToDos));
  setToDos(newToDos);
  refreshToDos();
};

export default clearAllItems;
