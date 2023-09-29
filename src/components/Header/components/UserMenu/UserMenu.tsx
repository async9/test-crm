import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { userActions } from '@/store/user/userSlice';
import { FC, useId, useRef } from 'react';
import Cookies from 'universal-cookie';
import userIcon from '@/assets/icons/user.svg';
import logoutIcon from '@/assets/icons/logout.svg';
import { IconButton, UserLabel, UserName } from '../../styled';
import SVG from 'react-inlinesvg';
import {
  Body,
  Box,
  Group,
  Label,
  List,
  ListItem,
  Root,
  Row,
  Top,
} from './styled';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { uiActions } from '@/store/ui/uiSlice';
import { selectUsername } from '@/store/user/userSelects';

const cookies = new Cookies();

const UserMenu: FC = () => {
  const username = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();
  const containerRef = useRef(null);
  const containerId = useId();

  useOnClickOutside(containerRef, (event: MouseEvent | TouchEvent) => {
    if ((event.target as HTMLElement).id !== containerId) {
      dispatch(uiActions.showUserMenu(false));
    }
  });

  const handleLogout = () => {
    cookies.remove('accessToken', { path: '/' });
    dispatch(userActions.removeUserToken());
  };

  return (
    <Root id={containerId} ref={containerRef}>
      <Top>
        <Row>
          <SVG src={userIcon} title='User icon' />
          <Box>
            <UserName>{username}</UserName>
            <UserLabel>Utilizator global</UserLabel>
          </Box>
        </Row>
        <IconButton onClick={handleLogout}>
          <SVG src={logoutIcon} title='Logout icon' />
        </IconButton>
      </Top>
      <Body>
        <Group>
          <Label>SETARI UTILIZATOR</Label>
          <List>
            <ListItem>Change password</ListItem>
            <ListItem>Change email</ListItem>
          </List>
        </Group>
        <Group>
          <Label>ACTIUNE RAPIDE</Label>
          <List>
            <ListItem>Mergi la lidu-ri</ListItem>
          </List>
        </Group>
      </Body>
    </Root>
  );
};

export default UserMenu;
