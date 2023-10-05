import { FC } from 'react';
import { Body, Root, Title, Top } from './styled';
import { Badge, Button, Flex, Text } from '@radix-ui/themes';
import { IconButton } from '@/styles/mixins';
import { Cross1Icon } from '@radix-ui/react-icons';
import { useAppDispatch } from '@/hooks/redux';
import { uiActions } from '@/store/ui/uiSlice';

const Targets: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Root>
      <Top>
        <Title>Targets</Title>
        <IconButton
          onClick={() =>
            dispatch(
              uiActions.showMenu({
                variant: 'targets',
                show: false,
              })
            )
          }
        >
          <Cross1Icon />
        </IconButton>
      </Top>
      <Body>
        <Text>Nu ai targete setate!</Text>
      </Body>
    </Root>
  );
};

export default Targets;
