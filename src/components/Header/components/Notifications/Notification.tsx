import { FC } from 'react';
import SVG from 'react-inlinesvg';
import {
  Box,
  CardTop,
  CardBody,
  DateText,
  Root,
  Top,
  LoaderPosition,
} from './styled';
import { Badge, Button, Text } from '@radix-ui/themes';
import { IconButton, MenuScroll } from '@/styles/mixins';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import mailIcon from '@/assets/icons/email.svg';
import Loader from '@/components/Loader/Loader';

type MessageType = {
  startDate: string;
  description: string;
  taskRootUuid: string;
  uuid: string;
};

const Notifications: FC<{
  data: { data: MessageType[]; isFetching: boolean };
}> = ({ data }) => {
  return (
    <Root>
      {data.isFetching ? (
        <LoaderPosition>
          <Loader />
        </LoaderPosition>
      ) : null}
      <Top>
        <Button>Aboneaza-te</Button>
        <Text>
          Ai{' '}
          <Badge color='red' variant='solid'>
            202
          </Badge>{' '}
          mesaje necitite
        </Text>
      </Top>
      <MenuScroll>
        <ul>
          {data.data && data.data.length
            ? data.data.map((item) => (
                <li key={item.uuid}>
                  <a
                    href={`${import.meta.env.VITE_DOMAIN}/#/offers/details/${
                      item.taskRootUuid
                    }`}
                    target='_blank'
                  >
                    <CardTop>
                      <SVG src={mailIcon} title='Mail icon' />
                      <DateText>{item.startDate}</DateText>
                    </CardTop>
                    <CardBody>
                      <Box>
                        <Text>{item.description}</Text>
                        <IconButton>
                          <ArrowRightIcon style={{ width: 20 }} />
                        </IconButton>
                      </Box>
                    </CardBody>
                  </a>
                </li>
              ))
            : null}
        </ul>
      </MenuScroll>
    </Root>
  );
};

export default Notifications;
