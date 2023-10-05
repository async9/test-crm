import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowMenu } from '@/store/ui/uiSelector';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { uiActions } from '@/store/ui/uiSlice';
import GroupItems from './GroupItems/GroupItems';
import { Button, Root, Top, Body } from './styled';
import { Theme } from '@radix-ui/themes';

const getMenuItems = localStorage.getItem('menuItems') || '';
const menuItems = getMenuItems ? JSON.parse(getMenuItems) : [];

const Sidebar: FC = () => {
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );
  const dispatch = useAppDispatch();
  const [data] = useState(menuItems);

  return (
    <Theme panelBackground='translucent' radius='small'>
      <Root showSidebar={showSidebarMenu}>
        <Top>
          <Button
            onClick={() =>
              dispatch(
                uiActions.showMenu({
                  variant: 'sidebar',
                  show: !showSidebarMenu,
                })
              )
            }
          >
            {showSidebarMenu ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </Button>
        </Top>
        <Body>
          {data.map((item: any, index: number) => (
            <GroupItems key={index} label={item.header} items={item.content} />
          ))}
        </Body>
      </Root>
    </Theme>
  );
};

export default Sidebar;
