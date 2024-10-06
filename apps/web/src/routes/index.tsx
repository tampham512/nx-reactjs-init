import { DefaultLayout } from '@atomic/templates';
import { ManageTask } from '@modules/manage-task';
import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <ManageTask />,
      },
    ],
  },
]);
