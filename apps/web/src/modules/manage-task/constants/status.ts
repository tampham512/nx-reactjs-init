import { i18nContant } from '@org/i18n';

export enum EStatusTodo {
  Completed = 'COMPLETED',
  Incompleted = 'IN_COMPLETED',
  All = '',
}
export const statusTodoOptions = [
  {
    value: EStatusTodo.All,
    label: i18nContant('all'),
  },
  {
    value: EStatusTodo.Completed,
    label: i18nContant('completed'),
  },
  {
    label: i18nContant('incompleted'),
    value: EStatusTodo.Incompleted,
  },
];
