import { FC, useEffect } from 'react';
import { Badge, Card, Flex } from '@radix-ui/themes';
import { useStatusMutation } from '@/api/statusSlice';
import { StatusDataType, StatusDataVariantType } from '../../types';
import { Root, Title } from './styled';
import CardItem from '../CardItem/CardItem';
import Loader from '@/components/Loader/Loader';

const CardsColumn: FC<{
  variant: StatusDataVariantType;
  label: string;
}> = ({ variant, label }) => {
  const [status, { data, isLoading }] = useStatusMutation();

  useEffect(() => {
    status(variant);
  }, [variant]);

  if (!data) return null;

  return (
    <Root>
      <Loader show={isLoading} />
      <Card size='1' style={{ marginBottom: '1rem' }}>
        <Flex align='center' justify='between' gap='2'>
          <Title>{label}</Title>
          <Flex gap='1'>
            <Badge color='green' variant='soft'>
              24512423
            </Badge>
            <Badge color='crimson' variant='soft'>
              6
            </Badge>
          </Flex>
        </Flex>
      </Card>
      {data.map((item: StatusDataType, index: number) => (
        <CardItem key={index} data={item} />
      ))}
    </Root>
  );
};

export default CardsColumn;
