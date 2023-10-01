import { FC } from 'react';
import { Badge, Button, Card, Flex } from '@radix-ui/themes';
import {
  ArrowRightIcon,
  CalendarIcon,
  ImageIcon,
  MobileIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { Text, Title } from './styled';
import { StatusDataType } from '../../types';
import { DividerX } from '@/styles/mixins';

const CardItem: FC<{ data: StatusDataType }> = ({ data }) => {
  const {
    title,
    subtitle,
    lastStatusDate,
    contactName,
    contactPhone,
    offers,
    totalPrice,
    address,
    commandDetails,
    rootUuid,
  } = data;

  return (
    <Card size='1' style={{ marginTop: '1rem' }}>
      <Flex align='center' justify='between'>
        <Title>{title}</Title>
        <Button
          onClick={() =>
            (window.location.href = `${
              import.meta.env.VITE_DOMAIN
            }/#/offers/details/${rootUuid}`)
          }
          color='blue'
          variant='soft'
        >
          <ArrowRightIcon />
        </Button>
      </Flex>
      <DividerX />
      <div>
        <Flex align='center'>
          <ImageIcon /> <Text>{subtitle}</Text>
        </Flex>
        <Flex align='center'>
          <PersonIcon /> <Text>{contactName}</Text>
        </Flex>
        <Flex align='center'>
          <CalendarIcon /> <Text>{lastStatusDate}</Text>
        </Flex>
        <Flex align='center'>
          <MobileIcon /> <Text>{contactPhone}</Text>
        </Flex>
      </div>
      <DividerX />
      <div>
        <Flex align='center' style={{ marginBottom: '0.4rem' }}>
          <Text>Agent - Oferte: {offers}</Text>
          <Badge color='green' variant='soft'>
            {totalPrice}
          </Badge>
        </Flex>
        {address && address.address ? (
          <Flex align='center'>
            <Text>Address:</Text>
            <Badge color='blue' variant='soft'>
              {address.address}, {address.city}
            </Badge>
          </Flex>
        ) : null}
        {commandDetails && commandDetails.commandNumber ? (
          <Flex align='center'>
            <Text>Comanda:</Text>
            <Badge color='orange' variant='soft'>
              {commandDetails?.commandNumber}
            </Badge>
          </Flex>
        ) : null}
      </div>
    </Card>
  );
};

export default CardItem;
