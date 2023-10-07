import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowMenu, selectSidebarData } from '@/store/ui/uiSelector';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import { uiActions } from '@/store/ui/uiSlice';
import GroupItems from './GroupItems/GroupItems';
import { Button, Root, Top, Body } from './styled';
import { Theme } from '@radix-ui/themes';

const Sidebar: FC = () => {
  const sidebarData = useAppSelector(selectSidebarData);
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );
  const dispatch = useAppDispatch();

  return (
    <Theme panelBackground='translucent' radius='small'>
      <Root $showSidebarMenu={showSidebarMenu}>
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
          {sidebarData && sidebarData.length
            ? sidebarData.map((item, index: number) => (
                <GroupItems key={index} data={item} />
              ))
            : null}
        </Body>
      </Root>
    </Theme>
  );
};

export default Sidebar;
