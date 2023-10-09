import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { userActions } from '@/store/user/userSlice';
import Cookies from 'universal-cookie';
import { selectUsername } from '@/store/user/userSelects';
import { ExitIcon, PersonIcon } from '@radix-ui/react-icons';
import { UserLabel, UserName } from '../../styled';
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
import { IconButton, MenuScroll } from '@/styles/mixins';
import { uiActions } from '@/store/ui/uiSlice';

const cookies = new Cookies();

const Profile: FC = () => {
  const username = useAppSelector(selectUsername);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(
      uiActions.showMenu({
        variant: 'user',
        show: false,
      })
    );
    cookies.remove('accessToken', { path: '/' });
    dispatch(userActions.removeUserToken());
    navigate('/login', { replace: true });
  };

  return (
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
        <MenuScroll>
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
        </MenuScroll>
      </Body>
    </Root>
  );
};

export default Profile;
