import { URL_API } from '@utils/constants';

export const pathToDoListAPI = `${URL_API}/todo-list`;
export enum EStatusTodo {
  Completed = 'COMPLETED',
  Incompleted = 'IN_COMPLETED',
}

export interface TodoItem {
  id: number;
  title: string;
  status: EStatusTodo;
}

const todoList: TodoItem[] = [
  { id: 1, title: 'Todo list 1', status: EStatusTodo.Completed },
  { id: 2, title: 'Todo list 2', status: EStatusTodo.Incompleted },
  { id: 3, title: 'Todo list 3', status: EStatusTodo.Completed },
  { id: 4, title: 'Todo list 4', status: EStatusTodo.Completed },
];

export const mockData = {
  getTodoList: (status: EStatusTodo) => {
    if (!status) return todoList;
    return todoList.filter((todo) => todo.status === status);
  },
  createTask: (newTask: TodoItem) => {
    todoList.push(newTask);
    return newTask;
  },
  updateTask: (id: number, updatedTask: Partial<TodoItem>) => {
    const indexFind = todoList.findIndex((task) => task.id === id);
    if (indexFind !== -1) {
      todoList[indexFind] = { ...todoList[indexFind], ...updatedTask };
      return todoList[indexFind];
    }
    return null;
  },
};
