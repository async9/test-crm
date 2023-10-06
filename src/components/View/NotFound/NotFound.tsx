import { FC } from 'react';
import { Theme } from '@radix-ui/themes';
import { Root, Title } from './styled';

const Auth: FC = () => {
  return (
    <Theme appearance='dark' panelBackground='translucent' radius='small'>
      <Root>
        <Title>Not found - 404</Title>
      </Root>
    </Theme>
  );
};

export default Auth;
