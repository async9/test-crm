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
import UserMenu from './components/UserMenu/UserMenu';
import { uiActions } from '@/store/ui/uiSlice';
import { selectShowUserMenu } from '@/store/ui/uiSelector';
import {
  BellIcon,
  GridIcon,
  PersonIcon,
  TargetIcon,
} from '@radix-ui/react-icons';
import { Theme } from '@radix-ui/themes';

const Header: FC = () => {
  const username = useAppSelector(selectUsername);
  const userToken = useAppSelector(selectUserToken);
  const showUserMenu = useAppSelector(selectShowUserMenu);
  const dispatch = useAppDispatch();

  if (!userToken) return null;

  return (
    <Theme appearance='dark' panelBackground='solid'>
      <Root>
        <div></div>
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
            <InnerBox>
              <UserName>{username}</UserName>
              <UserLabel>Utilizator global</UserLabel>
            </InnerBox>
            {showUserMenu ? <UserMenu /> : null}
          </Box>
        </Row>
      </Root>
    </Theme>
  );
};

export default Header;
