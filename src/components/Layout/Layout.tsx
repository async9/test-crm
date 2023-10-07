import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { useAppSelector } from '@/hooks/redux';
import { selectShowMenu } from '@/store/ui/uiSelector';
import { selectUserToken } from '@/store/user/userSelects';
import Header from '../Header/Header';
import { Container } from './styled';
import Sidebar from '../Sidebar/Sidebar';
import Auth from '../View/Auth/Auth';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  const userToken = useAppSelector(selectUserToken);
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );

  return (
    <>
      <Toaster position='top-right'></Toaster>
      {userToken ? (
        <Container $showSidebarMenu={showSidebarMenu}>
          <Sidebar />
          <div>
            <Header />
            <Outlet />
          </div>
        </Container>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Layout;
