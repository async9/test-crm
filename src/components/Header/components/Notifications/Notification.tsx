import { FC } from 'react';
import { Body, InnerTop, Root, Title, Top } from './styled';
import { Badge, Button, Flex, Text } from '@radix-ui/themes';
import { IconButton } from '@/styles/mixins';
import { Cross1Icon } from '@radix-ui/react-icons';
import { uiActions } from '@/store/ui/uiSlice';
import { useAppDispatch } from '@/hooks/redux';

const Notifications: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Root>
      <Top>
        <InnerTop>
          <Title>Notificari</Title>
          <IconButton
            onClick={() =>
              dispatch(
                uiActions.showMenu({
                  variant: 'notifications',
                  show: false,
                })
              )
            }
          >
            <Cross1Icon />
          </IconButton>
        </InnerTop>
        <Flex justify='between' align='center'>
          <Button>Aboneaza-te</Button>
          <Text>
            Ai{' '}
            <Badge color='red' variant='solid'>
              202
            </Badge>{' '}
            mesaje necitite
          </Text>
        </Flex>
      </Top>
      <Body></Body>
    </Root>
  );
};

export default Notifications;
