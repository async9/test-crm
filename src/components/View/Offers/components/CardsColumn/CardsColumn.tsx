import { Badge, Card, Flex } from '@radix-ui/themes';
import { FC, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { Title } from './styled';
import { useStatusMutation } from '@/api/statusSlice';
import Loader from '../Loader/FieldLoader';

const CardsColumn: FC<{
  variant: 'OFERTA' | 'CONTACT' | 'NU_ACUM' | 'COMANDA';
  label: string;
}> = ({ variant, label }) => {
  const [status, { data, isLoading, isError, error }] = useStatusMutation();

  useEffect(() => {
    status(variant);
  }, [variant]);

  if (!data) return null;

  console.log(data);

  return (
    <div>
      {/* <Loader show={!isLoading} /> */}
      <>
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
        {data.map((item: any, index: number) => (
          <CardItem key={index} data={item} />
        ))}
      </>
    </div>
  );
};

export default CardsColumn;
