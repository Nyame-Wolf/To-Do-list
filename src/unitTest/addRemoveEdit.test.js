import { getToDos, createToDo } from "../modules/addRemoveEdit.js";

import clearAllItems from "../modules/interactive.js";

jest.mock("../modules/localStorage");
describe("Test todo app", () => {
  const task1 = {
    description: "Play soccer",
    completed: false,
    index: 1,
  };

  const task2 = {
    description: "Eat food",
    completed: false,
    index: 2,
  };

  const task3 = {
    description: "Take a nap",
    completed: false,
    index: 3,
  };

  const task4 = {
    description: "pair program",
    completed: false,
    index: 4,
  };

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  //   const task5 = {
  //     description: "Drink water",
  //     completed: false,
  //     isbn: "1657742044938",
  //     index: "5",
  //   };

  //   const task6 = {
  //     description: "play tennis",
  //     completed: false,
  //     index: "6",
  //   };

  describe("add todo", () => {
    test("should add task 1", () => {
      // act
      createToDo(task1);
      // assert
      expect(getToDos().length).toEqual(1);
      expect(getToDos()[0]).toEqual(task1);
    });
  });

  describe("remove todo", () => {
    test("Should remove tasks from array", async () => {
      // act
      createToDo(task2);
      createToDo(task3);
      createToDo(task4);
      const remove2nd = document.querySelectorAll(".btn-remove")[1];
      remove2nd.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );

      await wait(300);

      // assert
      expect(getToDos().length).toEqual(3);
      expect(getToDos()).not.toContain(task2);
    });
  });

  describe("Edit task method", () => {
    test("Should change description from item1 to task1", async () => {
      const item1 = document.querySelectorAll(".content")[0];
      item1.innerHTML = "task1";
      item1.dispatchEvent(
        new InputEvent("input", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
      await wait(300);
      // assert
      expect(getToDos()[0].description).toBe("task1");
    });
  });
  describe("Toggle completed status on checkbox click", () => {
    test("should return task 1 status as true", async () => {
      const input = document.querySelectorAll("input[type=checkbox]")[0];

      input.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );

      await wait(300);

      expect(getToDos()[0].completed).toEqual(true);
    });
  });
  describe("Clear all completed", () => {
    test("should remove all completed todos", () => {
      clearAllItems();
      expect(getToDos().length).toEqual(2);
      expect(getToDos()).not.toContain(task1);
    });
  });
});
