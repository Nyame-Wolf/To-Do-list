/**
 * @jest-environment jsdom
 */

import { addToDo, getToDos } from "../modules/addRemoveEdit.js";

describe("Test todo app", () => {
  const task1 = {
    description: "Play soccer",
    completed: false,
    index: "1",
  };

  //   const task2 = {
  //     description: "Eat food",
  //     completed: false,
  //     index: "2",
  //   };

  //   const task3 = {
  //     description: "Take a nap",
  //     completed: false,
  //     index: "3",
  //   };

  //   const task4 = {
  //     description: "pair program",
  //     completed: false,
  //     index: "4",
  //   };

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
    test("should add task 1 to array", () => {
      // act
      addToDo(task1);
      // assert
      expect(getToDos().length).toEqual(1);
      expect(getToDos()[0]).toEqual(task1);
    });
  });
});
