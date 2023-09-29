import { FC } from 'react';
import { Container, Theme } from '@radix-ui/themes';

import { Root } from './styled';
import AuthForm from '../../AuthForm/AuthForm';
import bgImage from '@/assets/images/bg.webp';

const Auth: FC = () => {
  return (
    <Root style={{ backgroundImage: `url(${bgImage})` }}>
      <Container size='1'>
        <Theme panelBackground='translucent' radius='small'>
          <AuthForm />
        </Theme>
      </Container>
    </Root>
  );
};

export default Auth;
