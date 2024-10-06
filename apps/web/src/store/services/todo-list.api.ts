import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseNoAuthQuery } from './base-auth-query';

export const TodoListAPI = createApi({
  reducerPath: 'TodoListAPI',
  baseQuery: baseNoAuthQuery,
  tagTypes: ['GET_TODO_LIST'],

  endpoints: (builder) => ({
    getTodoList: builder.query({
      query: (params) => ({
        url: '/todo-list',
        params: params,
        method: 'GET',
      }),
      providesTags: ['GET_TODO_LIST'],
    }),

    createTodoList: builder.mutation({
      query: (body) => ({
        url: '/todo-list',
        body,
        method: 'POST',
      }),
      invalidatesTags: ['GET_TODO_LIST'],
    }),

    updateTodoList: builder.mutation({
      query: ({ body, id }) => ({
        url: `/todo-list/${id}`,
        body,
        method: 'PUT',
      }),
      invalidatesTags: ['GET_TODO_LIST'],
    }),
    deleteTodoList: builder.mutation({
      query: (id) => ({
        url: `/todo-list/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['GET_TODO_LIST'],
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useLazyGetTodoListQuery,
  useUpdateTodoListMutation,
  useCreateTodoListMutation,
  useDeleteTodoListMutation,
} = TodoListAPI;
