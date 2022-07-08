import "./style.css";

import { getToDos, createToDo, addToDo } from "./modules/addRemoveEdit.js";
import clearAllItems from "./modules/interactive.js";

const clearCompleted = document.querySelector(".clear");

const input = document.querySelector(".desc");

getToDos().forEach(createToDo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const completed = false;
    const description = document.querySelector(".desc").value;
    const index = getToDos().length + 1;
    const newTodo = createToDo({ description, completed, index });
    addToDo(newTodo);
    input.value = "";
  }
});

clearCompleted.addEventListener("click", clearAllItems);
