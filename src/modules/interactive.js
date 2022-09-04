import {
  getToDos,
  setToDos,
  populateTodos,
  removeTodos,
} from "./addRemoveEdit.js";

import * as localStorage from "./localStorage.js";

const clearAllICompleted = () => {
  const todos = getToDos();
  const newToDos = removeTodos((todo) => !todo.completed, todos);
  localStorage.setItem("todos", JSON.stringify(newToDos));
  setToDos(newToDos);
  populateTodos();
};

export default clearAllICompleted;
