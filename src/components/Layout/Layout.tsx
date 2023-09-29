import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Theme } from '@radix-ui/themes';

import Header from '../Header/Header';
import { Content } from './styled';
import Sidebar from '../Sidebar/Sidebar';
import { useAppSelector } from '@/hooks/redux';
import { selectShowSidebar } from '@/store/ui/uiSelector';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const showSidebar = useAppSelector(selectShowSidebar);

  return (
    <>
      <Toaster position='top-right'></Toaster>
      <Theme appearance='dark'>
        <Content showSidebar={showSidebar}>
          <Sidebar />
          <div>
            <Header />
            {children}
          </div>
        </Content>
      </Theme>
    </>
  );
};

export default Layout;
