import { populateTodos, setToDos } from "./addRemoveEdit.js";

const clearAll = () => {
  const newTodos = [];
  localStorage.clear();
  setToDos(newTodos);
  populateTodos();
};

export default clearAll;
