import Auth from '@/components/View/Auth/Auth';
import Layout from '@/components/Layout/Layout';
import NotFound from '@/components/View/NotFound/NotFound';
import Offers from '@/components/View/Offers/Offers';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@/components/View/Home';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/offers',
          element: <Offers />,
        },
      ],
    },
    {
      path: '/login',
      element: <Auth />,
    },
  ],
  {
    basename: '/',
  }
);

export default router;
