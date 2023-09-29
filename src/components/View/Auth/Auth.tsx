import { FC } from 'react';
import { Container, Theme } from '@radix-ui/themes';

import { Root } from './styled';
import AuthForm from '../../AuthForm/AuthForm';

const Auth: FC = () => {
  return (
    <Root>
      <Container size='1'>
        <Theme panelBackground='translucent' radius='small'>
          <AuthForm />
        </Theme>
      </Container>
    </Root>
  );
};

export default Auth;
