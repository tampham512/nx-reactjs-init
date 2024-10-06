import { COLOR } from '@org/utils';
import { ConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';
import './antd-styled.scss';

export function AntdProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Select: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
            colorPrimaryActive: COLOR.Primary,
            colorBgTextActive: COLOR.Primary,
          },
          Dropdown: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Table: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Pagination: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Checkbox: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Tabs: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          DatePicker: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Cascader: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          ColorPicker: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Radio: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
          Switch: {
            colorPrimary: COLOR.Primary,
            algorithm: true,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
