import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { userActions } from '@/store/user/userSlice';
import Cookies from 'universal-cookie';
import { Theme } from '@radix-ui/themes';
import { selectUsername } from '@/store/user/userSelects';
import { ExitIcon, PersonIcon } from '@radix-ui/react-icons';

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

const cookies = new Cookies();

const UserMenu: FC = () => {
  const username = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove('accessToken', { path: '/' });
    dispatch(userActions.removeUserToken());
    navigate('/login', { replace: true });
  };

  return (
    <Theme panelBackground='translucent' radius='small'>
      <Root>
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
