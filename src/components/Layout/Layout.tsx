import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { useAppSelector } from '@/hooks/redux';
import { selectShowMenu } from '@/store/ui/uiSelector';
import { selectUserToken } from '@/store/user/userSelects';

import Header from '../Header/Header';
import { Content } from './styled';
import Sidebar from '../Sidebar/Sidebar';
import Auth from '../View/Auth/Auth';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const userToken = useAppSelector(selectUserToken);
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );

  return (
    <>
      <Toaster position='top-right'></Toaster>
      {userToken ? (
        <Content showSidebar={showSidebarMenu}>
          <Sidebar />
          <div>
            <Header />
            {children}
          </div>
        </Content>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Layout;
