import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowSidebar } from '@/store/ui/uiSelector';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { selectUserToken } from '@/store/user/userSelects';
import { uiActions } from '@/store/ui/uiSlice';
import GroupItems from './GroupItems/GroupItems';
import { Button, Root, Top, Body } from './styled';
import { Theme } from '@radix-ui/themes';
import bgImage from '@/assets/images/bg.webp';

const getMenuItems = localStorage.getItem('menuItems') || '';
const menuItems = getMenuItems ? JSON.parse(getMenuItems) : [];

const Sidebar: FC = () => {
  const userToken = useAppSelector(selectUserToken);
  const showSidebar = useAppSelector(selectShowSidebar);
  const dispatch = useAppDispatch();

  if (!userToken) return null;

  return (
    <Theme panelBackground='translucent' radius='small'>
      <Root
        showSidebar={showSidebar}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Top>
          <Button onClick={() => dispatch(uiActions.showSidebar(!showSidebar))}>
            {showSidebar ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </Button>
        </Top>
        <Body>
          {menuItems.map((item: any, index: number) => (
            <GroupItems key={index} label={item.header} items={item.content} />
          ))}
        </Body>
      </Root>
    </Theme>
  );
};

export default Sidebar;
