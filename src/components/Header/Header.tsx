import { FC, useEffect } from 'react';
import {
  Divider,
  Root,
  Row,
  InnerBox,
  UserLabel,
  UserName,
  Box,
  NotifBox,
  NotifIndicator,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUsername } from '../../store/user/userSelects';
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
import MenuWrapper from './components/MenuWrapper/MenuWrapper';
import { selectShowMenu } from '@/store/ui/uiSelector';
import Notifications from './components/Notifications/Notification';
import Profile from './components/Profile/Profile';
import Targets from './components/Targets/Targets';
import Navigation from './components/Navigation/Navigation';
import { IconButton } from '@/styles/mixins';
import { useGetMessagesQuery } from '@/api/offersSlice';
import toast from 'react-hot-toast';

const Header: FC = () => {
  const username = useAppSelector(selectUsername);
  const showUserMenu = useAppSelector((state) => selectShowMenu(state, 'user'));
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );
  const showNotificationsMenu = useAppSelector((state) =>
    selectShowMenu(state, 'notifications')
  );
  const showTargetsMenu = useAppSelector((state) =>
    selectShowMenu(state, 'targets')
  );
  const showNavigationMenu = useAppSelector((state) =>
    selectShowMenu(state, 'navigation')
  );
  const dispatch = useAppDispatch();
  const { isMobile } = useScreenSize();

  const getMessages = useGetMessagesQuery('?limit=true');
  const { data, isFetching, isError } = getMessages;

  useEffect(() => {
    if (isError) {
      toast.error('Error: failed to get messages');
    }
  }, [isError]);

  return (
    <Theme appearance='dark' panelBackground='solid'>
      <Root>
        <IconButton
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
        </IconButton>
        <Row>
          <IconButton
            $showMenu={showNavigationMenu}
            onClick={() =>
              dispatch(
                uiActions.showMenu({
                  variant: 'navigation',
                  show: true,
                })
              )
            }
          >
            <GridIcon />
          </IconButton>
          <IconButton
            $showMenu={showTargetsMenu}
            onClick={() =>
              dispatch(
                uiActions.showMenu({
                  variant: 'targets',
                  show: true,
                })
              )
            }
          >
            <TargetIcon />
          </IconButton>
          <IconButton
            $showMenu={showNotificationsMenu}
            onClick={() =>
              dispatch(
                uiActions.showMenu({
                  variant: 'notifications',
                  show: true,
                })
              )
            }
          >
            <NotifBox>
              <NotifIndicator />
              <BellIcon />
            </NotifBox>
          </IconButton>
          <Divider />
          <Box>
            <IconButton
              $showMenu={showUserMenu}
              onClick={() =>
                dispatch(
                  uiActions.showMenu({
                    variant: 'user',
                    show: true,
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
              <MenuWrapper
                title='Profile'
                onClose={() =>
                  dispatch(
                    uiActions.showMenu({
                      variant: 'user',
                      show: !showUserMenu,
                    })
                  )
                }
              >
                <Profile />
              </MenuWrapper>
            ) : null}
            {showNotificationsMenu ? (
              <MenuWrapper
                title='Notificatii'
                onClose={() =>
                  dispatch(
                    uiActions.showMenu({
                      variant: 'notifications',
                      show: !showNotificationsMenu,
                    })
                  )
                }
              >
                <Notifications data={{ data: data, isFetching }} />
              </MenuWrapper>
            ) : null}
            {showTargetsMenu ? (
              <MenuWrapper
                title='Targete'
                onClose={() =>
                  dispatch(
                    uiActions.showMenu({
                      variant: 'targets',
                      show: !showTargetsMenu,
                    })
                  )
                }
              >
                <Targets />
              </MenuWrapper>
            ) : null}
            {showNavigationMenu ? (
              <MenuWrapper
                title='Navigatie rapida'
                onClose={() =>
                  dispatch(
                    uiActions.showMenu({
                      variant: 'navigation',
                      show: !showNavigationMenu,
                    })
                  )
                }
              >
                <Navigation />
              </MenuWrapper>
            ) : null}
          </Box>
        </Row>
      </Root>
    </Theme>
  );
};

export default Header;
