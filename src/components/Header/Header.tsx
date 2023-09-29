import { FC } from 'react';
import SVG from 'react-inlinesvg';

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
import userIcon from '@/assets/icons/user.svg';
import bellIcon from '@/assets/icons/bell.svg';
import dartIcon from '@/assets/icons/dart.svg';
import gridIcon from '@/assets/icons/grid.svg';
import { selectUserToken, selectUsername } from '../../store/user/userSelects';
import UserMenu from './components/UserMenu/UserMenu';
import { uiActions } from '@/store/ui/uiSlice';
import { selectShowUserMenu } from '@/store/ui/uiSelector';

const Header: FC = () => {
  const username = useAppSelector(selectUsername);
  const userToken = useAppSelector(selectUserToken);
  const showUserMenu = useAppSelector(selectShowUserMenu);
  const dispatch = useAppDispatch();

  if (!userToken) return null;

  return (
    <Root>
      <div></div>
      <Row>
        <IconButton>
          <SVG src={gridIcon} title='Grid icon' />
        </IconButton>
        <IconButton>
          <SVG src={dartIcon} title='Dart icon' />
        </IconButton>
        <IconButton>
          <SVG src={bellIcon} title='Bell icon' />
        </IconButton>
        <Divider />
        <Box>
          <IconButton
            active={showUserMenu}
            onClick={() => dispatch(uiActions.showUserMenu(true))}
          >
            <SVG src={userIcon} title='User icon' />
          </IconButton>
          <InnerBox>
            <UserName>{username}</UserName>
            <UserLabel>Utilizator global</UserLabel>
          </InnerBox>
          {showUserMenu ? <UserMenu /> : null}
        </Box>
      </Row>
    </Root>
  );
};

export default Header;
