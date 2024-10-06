import { css } from '@emotion/css';
import { Pagination, Spin, Table as TableBase } from 'antd';
import { SortOrder } from 'antd/es/table/interface';
import { findIndex } from 'lodash';
import { useMemo } from 'react';
import { Select } from '../select';
import { Space } from '../space';
import { ISortParams } from './hooks/useSortTable';
import { AnyObject } from 'yup';

interface IValues {
  pagination: { currentPage: number };
  sort: ISortParams;
}
interface TableIntance {
  values: IValues;
  limit: number;
  onChangePage: (page: number, pageSize?: number) => void;
  onSort: any;
}
interface ITable {
  tableInstance: TableIntance;
  totalPage?: number;
  onChange?: Function;
  columns: AnyObject[];
  data: AnyObject[];
  loading: boolean;
  [k: string]: unknown;
}

export function Table({
  tableInstance,
  totalPage,
  onChange,
  columns,
  data,
  loading = false,
  ...props
}: ITable) {
  const {
    values: {
      pagination: { currentPage },
      sort: { sortBy, sortDirection },
    },
    limit,
    onChangePage,
    onSort,
  } = tableInstance;

  const handleChange = (pagination: any, filter: any, sort: any, extra: any) => {
    onChange && onChange(pagination, filter, sort, extra);
    onSort && onSort(sort);
    onChangePage(1);
  };

  const convertColumns = useMemo(() => {
    if (!columns) return;

    const newColumns = [...columns];
    if (sortDirection && sortBy) {
      const columnIndex = findIndex(columns, { dataIndex: sortBy });
      const convertOrder: { asc: SortOrder; desc: SortOrder } = {
        asc: 'ascend',
        desc: 'descend',
      };

      newColumns.forEach((col, index) => {
        if (columnIndex > -1 && columnIndex == index) {
          col.sortOrder = convertOrder[sortDirection];
          col.defaultSortOrder = convertOrder[sortDirection];
        } else {
          delete col['sortOrder'];
          delete col['defaultSortOrder'];
        }
      });
    }
    return newColumns;
  }, [columns, sortBy, sortDirection]);
  return (
    <Spin spinning={loading}>
      <Space
        className={css`
          //overflow-x: scroll;
          //overflow-y: unset !important;
          //overflow-y: auto;
          &::-webkit-scrollbar {
            height: 1rem;
          }

          &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            cursor: pointer;
            border-radius: 2rem;
          }
        `}
      >
        <Space
          className={css`
            min-width: 80rem;
          `}
        >
          <TableBase
            onChange={handleChange}
            columns={convertColumns}
            pagination={false}
            dataSource={data}
            showSorterTooltip={false}
            sortDirections={['ascend', 'descend', 'ascend']}
            {...props}
          />
        </Space>
      </Space>

      <Space
        className={css`
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
        `}
      >
        {!!totalPage && (
          <Pagination
            defaultCurrent={currentPage}
            current={currentPage}
            defaultPageSize={limit}
            pageSize={limit}
            onChange={onChangePage}
            simple
            total={totalPage}
          />
        )}
      </Space>
    </Spin>
  );
}
export const SelectLimitTable = ({
  onChange,
  defaultValue,
}: {
  defaultValue: number;
  onChange: (value: number) => void;
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
      options={[
        { value: 10, label: '10' },
        { value: 25, label: '25' },
        { value: 50, label: '50' },
      ]}
    />
  );
};

export { EditableCell } from './edit-row';
export { useTable } from './hooks/useTable';
