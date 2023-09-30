import { FC } from 'react';
import { Card, Flex } from '@radix-ui/themes';
import { Root } from '../Header/styled';
import {
  BookmarkIcon,
  ImageIcon,
  MobileIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { Text, Title } from './styled';

const CardItem: FC = () => {
  return (
    <Card size='1'>
      <Title>Label</Title>
      <div>
        <Flex align='center'>
          <ImageIcon /> <Text>Industriale</Text>
        </Flex>
        <Flex align='center'>
          <PersonIcon /> <Text>Name</Text>
        </Flex>
        <Flex align='center'>
          <BookmarkIcon /> <Text>24-1242</Text>
        </Flex>
        <Flex align='center'>
          <MobileIcon /> <Text>23442142</Text>
        </Flex>
      </div>
      <div>
        <Flex align='center'>
          <Text>Agent - Oferte: 1</Text>
        </Flex>
      </div>
    </Card>
  );
};

export default CardItem;
