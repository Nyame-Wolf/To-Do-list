import "./style.css";
import reload from "./assets/icons8-refresh-20.png";

import {
  getToDos,
  createToDo,
  populateTodos,
} from "./modules/addRemoveEdit.js";
import clearAllCompleted from "./modules/interactive.js";
import clearAll from "./modules/clearAll.js";

const headDiv = document.querySelector(".heading");
const clearCompleted = document.querySelector(".clear");

const input = document.querySelector(".desc");

const refreshB = document.createElement("img");
refreshB.classList.add("reload");
refreshB.setAttribute("src", reload);
headDiv.appendChild(refreshB);

populateTodos();
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const completed = false;
    const description = document.querySelector(".desc").value;
    const index = getToDos().length + 1;
    createToDo({ description, completed, index });

    input.value = "";
  }
});

clearCompleted.addEventListener("click", clearAllCompleted);
refreshB.addEventListener("click", clearAll);
