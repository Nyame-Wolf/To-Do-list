/**
 * @jest-environment jsdom
 */

import {
  addToDo,
  getToDos,
  removeTodos,
  setToDos,
  refreshToDos,
} from '../modules/addRemoveEdit.js';

describe('Test todo app', () => {
  const task1 = {
    description: 'Play soccer',
    completed: false,
    index: 1,
  };

  console.log(task1.index);

  const task2 = {
    description: 'Eat food',
    completed: false,
    index: 2,
  };

  const task3 = {
    description: 'Take a nap',
    completed: false,
    index: 3,
  };

  const task4 = {
    description: 'pair program',
    completed: false,
    index: 4,
  };

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

  describe('add todo', () => {
    test('should add task 1 to array', () => {
      // act
      addToDo(task1);
      // assert
      expect(getToDos().length).toEqual(1);
      expect(getToDos()[0]).toEqual(task1);
    });
  });

  describe('remove todo', () => {
    test('Should remove tasks from array', () => {
      // act
      addToDo(task2);
      addToDo(task3);
      addToDo(task4);

      const newTodos = removeTodos(
        (task2) => task2.index !== getToDos()[1].index,
        getToDos()
      );
      setToDos(newTodos);

      // assert
      expect(getToDos().length).toEqual(3);
      expect(getToDos()).not.toContain(task2);
    });
  });
});
