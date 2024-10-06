import { Header } from '@atomic/molecules';
import { css } from '@emotion/css';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div
      className={css`
        padding: 10px;
        padding-top: 10px;
        min-height: 100vh;
      `}
    >
      <Header />
      <div
        className={css`
          padding-top: 20px;
          max-width: 1220px;
          margin: auto;
        `}
      >
        <Outlet />
      </div>
    </div>
  );
}
