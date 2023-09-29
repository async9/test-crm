import { FC } from 'react';
import { Button } from '@radix-ui/themes';
import Cookies from 'universal-cookie';

import { Root } from './styled';
import ReactIcon from '../Icons/ReactIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectUserToken } from '../../store/user/userSelects';
import { userActions } from '../../store/user/userSlice';

const cookies = new Cookies();

const Header: FC = () => {
  const userToken = useAppSelector(selectUserToken);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    cookies.remove('accessToken', { path: '/' });
    dispatch(userActions.removeUserToken());
  };

  return (
    <Root>
      <ReactIcon />
      {userToken ? (
        <Button onClick={handleLogout} color='indigo'>
          Logout
        </Button>
      ) : null}
    </Root>
  );
};

export default Header;
