import { FC } from 'react';
import {
  Divider,
  IconButton,
  Root,
  Row,
  InnerBox,
  UserLabel,
  UserName,
  Box,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUserToken, selectUsername } from '../../store/user/userSelects';
import { uiActions } from '@/store/ui/uiSlice';
import {
  BellIcon,
  Cross1Icon,
  GridIcon,
  HamburgerMenuIcon,
  PersonIcon,
  TargetIcon,
} from '@radix-ui/react-icons';
import { Theme } from '@radix-ui/themes';
import useScreenSize from '@/hooks/useScreenSize';
import Menu from './components/Menu/Menu';
import { selectShowMenu } from '@/store/ui/uiSelector';
import Notifications from './components/Notifications/Notification';
import UserMenu from './components/UserMenu/UserMenu';

const Header: FC = () => {
  const username = useAppSelector(selectUsername);
  const userToken = useAppSelector(selectUserToken);
  const showUserMenu = useAppSelector((state) => selectShowMenu(state, 'user'));
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );
  const showNotificationsMenu = useAppSelector((state) =>
    selectShowMenu(state, 'notifications')
  );
  const dispatch = useAppDispatch();
  const { isMobile } = useScreenSize();

  if (!userToken) return null;

  return (
    <Theme appearance='dark' panelBackground='solid'>
      <Root>
        <IconButton
          onClick={() =>
            dispatch(
              uiActions.showMenu({ variant: 'sidebar', show: !showSidebarMenu })
            )
          }
        >
          {showSidebarMenu ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </IconButton>
        <Row>
          <IconButton>
            <GridIcon />
          </IconButton>
          <IconButton>
            <TargetIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              dispatch(
                uiActions.showMenu({
                  variant: 'notifications',
                  show: !showNotificationsMenu,
                })
              )
            }
          >
            <BellIcon />
          </IconButton>
          <Divider />
          <Box>
            <IconButton
              showMenu={showUserMenu}
              onClick={() =>
                dispatch(
                  uiActions.showMenu({
                    variant: 'user',
                    show: !showUserMenu,
                  })
                )
              }
            >
              <PersonIcon />
            </IconButton>
            {isMobile ? null : (
              <InnerBox>
                <UserName>{username}</UserName>
                <UserLabel>Utilizator global</UserLabel>
              </InnerBox>
            )}
            {showUserMenu ? (
              <Menu
                onClose={() =>
                  dispatch(
                    uiActions.showMenu({
                      variant: 'user',
                      show: !showUserMenu,
                    })
                  )
                }
              >
                <UserMenu />
              </Menu>
            ) : null}
            {showNotificationsMenu ? (
              <Menu
                onClose={() =>
                  dispatch(
                    uiActions.showMenu({
                      variant: 'notifications',
                      show: !showNotificationsMenu,
                    })
                  )
                }
              >
                <Notifications />
              </Menu>
            ) : null}
          </Box>
        </Row>
      </Root>
    </Theme>
  );
};

export default Header;
