import { css } from '@emotion/css';
import { H3 } from '@org/ui';
import { PropsWithChildren, ReactNode } from 'react';
export interface IManageLayout {
  title: string;
  action: ReactNode;
}
export function ManageLayout({ title, action, children }: PropsWithChildren<IManageLayout>) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: 10px;
      `}
    >
      <div
        className={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <H3>{title}</H3>
        <div>{action}</div>
      </div>
      {children}
    </div>
  );
}
