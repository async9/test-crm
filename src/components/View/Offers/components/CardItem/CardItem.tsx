import { FC } from 'react';
import { Badge, Card, Flex } from '@radix-ui/themes';
import {
  CalendarIcon,
  ImageIcon,
  MobileIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { DividerX, Text, Title } from './styled';

const CardItem: FC<{
  data: {
    title: string;
    subtitle: string;
    lastStatusDate: string;
    contactName: string;
    contactPhone: string;
    offers: number;
    totalPrice: number;
    commandDetails: {
      commandId: string;
      commandNumber: string;
      commandSeries: string;
    };
  };
}> = ({ data }) => {
  const {
    title,
    subtitle,
    lastStatusDate,
    contactName,
    contactPhone,
    offers,
    totalPrice,
    commandDetails,
  } = data;

  return (
    <Card size='1' style={{ marginTop: '1rem' }}>
      <Title>{title}</Title>
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
        {commandDetails && commandDetails.commandNumber ? (
          <Flex align='center'>
            <Text>Comanda:</Text>
            <Badge color='blue' variant='soft'>
              {commandDetails.commandNumber}
            </Badge>
          </Flex>
        ) : null}
      </div>
    </Card>
  );
};

export default CardItem;
