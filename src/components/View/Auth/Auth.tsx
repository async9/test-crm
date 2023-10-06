import { FC, useEffect } from 'react';
import { Container, Theme } from '@radix-ui/themes';
import { Root } from './styled';
import AuthForm from '../../AuthForm/AuthForm';
import { useAppSelector } from '@/hooks/redux';
import { selectUserToken } from '@/store/user/userSelects';
import { useNavigate } from 'react-router';

const Auth: FC = () => {
  const userToken = useAppSelector(selectUserToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate('/', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    <Theme appearance='dark' panelBackground='translucent' radius='small'>
      <Root>
        <Container size='1'>
          <AuthForm />
        </Container>
      </Root>
    </Theme>
  );
};

export default Auth;
