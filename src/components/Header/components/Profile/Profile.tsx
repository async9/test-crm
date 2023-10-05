import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { userActions } from '@/store/user/userSlice';
import Cookies from 'universal-cookie';
import { Flex, Theme } from '@radix-ui/themes';
import { selectUsername } from '@/store/user/userSelects';
import { Cross1Icon, ExitIcon, PersonIcon } from '@radix-ui/react-icons';

import { UserLabel, UserName } from '../../styled';
import {
  Body,
  Box,
  Group,
  InnerTop,
  Label,
  List,
  ListItem,
  Root,
  Row,
  Title,
  Top,
} from './styled';
import { IconButton } from '@/styles/mixins';
import { uiActions } from '@/store/ui/uiSlice';

const cookies = new Cookies();

const Profile: FC = () => {
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
          <InnerTop>
            <Title>Profile</Title>
            <IconButton
              onClick={() =>
                dispatch(
                  uiActions.showMenu({
                    variant: 'user',
                    show: false,
                  })
                )
              }
            >
              <Cross1Icon />
            </IconButton>
          </InnerTop>
          <Flex align='center' justify='between'>
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
          </Flex>
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

export default Profile;
