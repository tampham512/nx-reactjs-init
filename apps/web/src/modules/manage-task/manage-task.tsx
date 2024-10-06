import { ManageLayout } from '@atomic/templates';
import { useTranslation } from '@org/i18n';
import { FilterTodoList, TableTodoList } from './components';
import { ActionTodoList } from './components/action';
import { FilterTableProvider } from '@org/core';
import { EStatusTodo } from './constants';
const initData = {
  status: EStatusTodo.All,
};

export type ManageTaskFilter = typeof initData;
export function ManageTask() {
  const { t } = useTranslation();

  return (
    <FilterTableProvider<ManageTaskFilter> initialArg={{ ...initData }}>
      <ManageLayout
        title={t('manage.title')}
        action={<ActionTodoList />}
      >
        <FilterTodoList />
        <TableTodoList />
      </ManageLayout>
    </FilterTableProvider>
  );
}
