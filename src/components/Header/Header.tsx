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
  Button,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUserToken, selectUsername } from '../../store/user/userSelects';
import UserMenu from './components/UserMenu/UserMenu';
import { uiActions } from '@/store/ui/uiSlice';
import { selectShowSidebar, selectShowUserMenu } from '@/store/ui/uiSelector';
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

const Header: FC = () => {
  const username = useAppSelector(selectUsername);
  const userToken = useAppSelector(selectUserToken);
  const showUserMenu = useAppSelector(selectShowUserMenu);
  const showSidebar = useAppSelector(selectShowSidebar);
  const dispatch = useAppDispatch();
  const { isMobile } = useScreenSize();

  if (!userToken) return null;

  return (
    <Theme appearance='dark' panelBackground='solid'>
      <Root>
        <div>
          <Button onClick={() => dispatch(uiActions.showSidebar(!showSidebar))}>
            {showSidebar ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </Button>
        </div>
        <Row>
          <IconButton>
            <GridIcon />
          </IconButton>
          <IconButton>
            <TargetIcon />
          </IconButton>
          <IconButton>
            <BellIcon />
          </IconButton>
          <Divider />
          <Box>
            <IconButton
              showMenu={showUserMenu}
              onClick={() => dispatch(uiActions.showUserMenu(true))}
            >
              <PersonIcon />
            </IconButton>
            {isMobile ? null : (
              <InnerBox>
                <UserName>{username}</UserName>
                <UserLabel>Utilizator global</UserLabel>
              </InnerBox>
            )}
            {showUserMenu ? <UserMenu /> : null}
          </Box>
        </Row>
      </Root>
    </Theme>
  );
};

export default Header;
