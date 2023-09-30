import { FC } from 'react';
import { Card, Flex } from '@radix-ui/themes';
import {
  CalendarIcon,
  ImageIcon,
  MobileIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { Text, Title } from './styled';

const CardItem: FC<{
  data: {
    title: string;
    subtitle: string;
    lastStatusDate: string;
    contactName: string;
    contactPhone: string;
    offers: number;
    totalPrice: number;
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
  } = data;

  return (
    <Card size='1'>
      <Title>{title}</Title>
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
      <div>
        <Flex align='center'>
          <Text>Agent - Oferte: {offers}</Text>
          <span>({totalPrice})</span>
        </Flex>
      </div>
    </Card>
  );
};

export default CardItem;
