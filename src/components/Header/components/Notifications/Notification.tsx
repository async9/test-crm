import { FC } from 'react';
import SVG from 'react-inlinesvg';
import {
  Body,
  BodyCard,
  BodyContainer,
  InnerTop,
  Root,
  Title,
  Top,
} from './styled';
import { Badge, Button, Flex, Text } from '@radix-ui/themes';
import { IconButton } from '@/styles/mixins';
import {
  ArrowRightIcon,
  CaretDownIcon,
  Cross1Icon,
} from '@radix-ui/react-icons';
import { uiActions } from '@/store/ui/uiSlice';
import { useAppDispatch } from '@/hooks/redux';
import mailIcon from '@/assets/icons/email.svg';

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
      <Body>
        <div>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                5 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
          <BodyContainer>
            <BodyCard>
              <div>
                <Text style={{ fontWeight: '700', marginBottom: 'rem' }}>
                  Notification title
                </Text>
                <br />
                <Text>Some description example...</Text>
              </div>
              <IconButton style={{ marginLeft: '2rem' }}>
                <ArrowRightIcon />
              </IconButton>
            </BodyCard>
          </BodyContainer>
        </div>
        <div>
          <Flex align='center' justify='between'>
            <Flex align='center'>
              <SVG src={mailIcon} title='Mail icon' />
              <Text style={{ marginLeft: '1rem', fontWeight: '600' }}>
                4 Oct 2023
              </Text>
            </Flex>
            <IconButton>
              <CaretDownIcon />
            </IconButton>
          </Flex>
        </div>
      </Body>
    </Root>
  );
};

export default Notifications;
