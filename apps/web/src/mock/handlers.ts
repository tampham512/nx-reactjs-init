import { http, HttpResponse } from 'msw';
import { EStatusTodo, mockData, pathToDoListAPI } from './mock-data';

interface IBodyCreate {
  title: string;
}
interface IBodyUpdate {
  status: EStatusTodo;
}
export const handlers = [
  http.get(pathToDoListAPI, (req) => {
    const url = new URL(req.request.url);

    const status = url.searchParams.get('status') as EStatusTodo;

    const todoList = mockData.getTodoList(status);
    return HttpResponse.json(todoList);
  }),
  http.post(pathToDoListAPI, async (req) => {
    const createTodo = (await req.request.json()) as IBodyCreate;

    if (!createTodo.title) {
      return HttpResponse.json(
        {
          field: 'title',
          error: 'required',
        },
        {
          status: 404,
        },
      );
    }
    const newTask = { id: Date.now(), title: createTodo.title, status: EStatusTodo.Incompleted };
    const createdTask = mockData.createTask(newTask);

    return HttpResponse.json(createdTask);
  }),
  http.put(`${pathToDoListAPI}/:id`, async (req) => {
    const id = Number(req.params.id);
    const updateTodo = (await req.request.json()) as IBodyUpdate;

    if (!id) {
      return HttpResponse.json(
        {
          field: 'id',
          error: 'required',
        },
        {
          status: 404,
        },
      );
    }
    const uppdateTask = mockData.updateTask(id, updateTodo);

    return HttpResponse.json(uppdateTask);
  }),
];
