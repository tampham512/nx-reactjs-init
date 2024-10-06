import { TodoItem } from '@mock/mock-data';
import { useFilterTable } from '@org/core';
import { useTranslation } from '@org/i18n';
import { Switch, Table, useTable } from '@org/ui';
import { useGetTodoListQuery, useUpdateTodoListMutation } from '@store/services';
import { EStatusTodo } from '../constants';
import { ManageTaskFilter } from '../manage-task';

export function TableTodoList() {
  const { state } = useFilterTable<ManageTaskFilter>();
  const { data, isFetching } = useGetTodoListQuery({ status: state.status });
  const [updateTodo] = useUpdateTodoListMutation();

  const { t } = useTranslation();

  const handleUpdateStatus = (item: TodoItem) => (value: boolean) => {
    const status = value ? EStatusTodo.Completed : EStatusTodo.Incompleted;
    updateTodo({
      id: item.id,
      body: {
        status,
      },
    });
  };

  const columns = [
    {
      key: 'title',
      title: t('title'),
      dataIndex: 'title',
      width: '80%',
    },
    {
      key: 'status',
      title: t('completed'),
      dataIndex: 'status',
      render: (status: EStatusTodo, item: TodoItem) => {
        return (
          <Switch
            checked={EStatusTodo.Completed === status}
            onChange={handleUpdateStatus(item)}
          />
        );
      },
    },
  ];
  const tableInstance = useTable({
    initialSortValue: {
      sortBy: '',
      sortDirection: '',
    },
  });
  return (
    <Table
      data={data}
      columns={columns}
      tableInstance={tableInstance}
      loading={isFetching}
    />
  );
}
