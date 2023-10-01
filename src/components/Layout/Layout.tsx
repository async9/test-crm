import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '../Header/Header';
import { Content } from './styled';
import Sidebar from '../Sidebar/Sidebar';
import { useAppSelector } from '@/hooks/redux';
import { selectShowSidebar } from '@/store/ui/uiSelector';
import { selectUserToken } from '@/store/user/userSelects';
import Auth from '../View/Auth/Auth';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const userToken = useAppSelector(selectUserToken);
  const showSidebar = useAppSelector(selectShowSidebar);

  return (
    <>
      <Toaster position='top-right'></Toaster>
      {userToken ? (
        <Content showSidebar={showSidebar}>
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
