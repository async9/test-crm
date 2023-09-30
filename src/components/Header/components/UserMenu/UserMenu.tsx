import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { userActions } from '@/store/user/userSlice';
import { FC, useId, useRef } from 'react';
import Cookies from 'universal-cookie';
import { IconButton, UserLabel, UserName } from '../../styled';
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
import { ExitIcon, PersonIcon } from '@radix-ui/react-icons';
import { Theme } from '@radix-ui/themes';

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
    <Theme panelBackground='translucent' radius='small'>
      <Root id={containerId} ref={containerRef}>
        <Top>
          <Row>
            <PersonIcon width={24} height={24} />
            <Box>
              <UserName>{username}</UserName>
              <UserLabel>Utilizator global</UserLabel>
            </Box>
          </Row>
          <IconButton onClick={handleLogout}>
            <ExitIcon />
          </IconButton>
        </Top>
        <Body>
          <Group>
            <Label>SETARI UTILIZATOR</Label>
            <List>
              <ListItem>Schimba parola</ListItem>
              <ListItem>Schimba email</ListItem>
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
    </Theme>
  );
};

export default UserMenu;
