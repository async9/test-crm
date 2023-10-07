import { FC } from 'react';
import { Body, Root } from './styled';
import { Text } from '@radix-ui/themes';
import { MenuScroll } from '@/styles/mixins';

const Targets: FC = () => {
  return (
    <Root>
      <Body>
        <MenuScroll>
          <Text>Nu ai targete setate!</Text>
        </MenuScroll>
      </Body>
    </Root>
  );
};

export default Targets;
