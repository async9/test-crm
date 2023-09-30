import { FC } from 'react';
import { Container, Theme } from '@radix-ui/themes';

import { Root } from './styled';
import AuthForm from '../../AuthForm/AuthForm';
import bgImage from '@/assets/images/bg.webp';

const Auth: FC = () => {
  return (
    <Theme appearance='dark' panelBackground='translucent' radius='small'>
      <Root style={{ backgroundImage: `url(${bgImage})` }}>
        <Container size='1'>
          <AuthForm />
        </Container>
      </Root>
    </Theme>
  );
};

export default Auth;
