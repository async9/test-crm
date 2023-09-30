import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowSidebar } from '@/store/ui/uiSelector';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { selectUserToken } from '@/store/user/userSelects';
import { uiActions } from '@/store/ui/uiSlice';
import GroupItems from './GroupItems/GroupItems';
import { Button, Root, Top, Body } from './styled';

const getMenuItems = localStorage.getItem('menuItems') || '';
const menuItems = JSON.parse(getMenuItems);

const Sidebar: FC = () => {
  const userToken = useAppSelector(selectUserToken);
  const showSidebar = useAppSelector(selectShowSidebar);
  const dispatch = useAppDispatch();

  if (!userToken) return null;

  return (
    <Root>
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
  );
};

export default Sidebar;
