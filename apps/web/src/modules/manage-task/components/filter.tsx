import { css } from '@emotion/css';
import { useFilterTable } from '@org/core';
import { Select } from '@org/ui';
import { EStatusTodo, statusTodoOptions } from '../constants';
import { ManageTaskFilter } from '../manage-task';

export function FilterTodoList() {
  const { state, dispatch } = useFilterTable<ManageTaskFilter>();
  const handleOnChange = (value: EStatusTodo) => {
    dispatch({
      type: 'status',
      nextValue: value,
    });
  };
  return (
    <Select
      options={statusTodoOptions}
      onChange={handleOnChange}
      value={state.status}
      size='large'
      className={css`
        width: 200px;
      `}
    />
  );
}
