import { FC, useEffect } from 'react';
import { Badge, Card, Flex } from '@radix-ui/themes';
import { useStatusMutation } from '@/api/offersSlice';
import { StatusDataType, QueryVariantType } from '../../types';
import { Root, Title } from './styled';
import CardItem from '../CardItem/CardItem';
import Loader from '@/components/Loader/Loader';
import toast from 'react-hot-toast';
import { useAppSelector } from '@/hooks/redux';
import { selectShowOffersDataColumn } from '@/store/ui/uiSelector';
import { UiOffersColumnType } from '@/types/ui/types';

const CardsColumn: FC<{
  query: QueryVariantType;
  variant: UiOffersColumnType;
  label: string;
}> = ({ query, variant, label }) => {
  const [status, { data, isLoading, isError }] = useStatusMutation();
  const showColumn = useAppSelector((state) =>
    selectShowOffersDataColumn(state, variant)
  );

  useEffect(() => {
    status(query);
  }, [query]);

  useEffect(() => {
    if (isError) {
      toast.error('Error: please try to refresh the page or re-login', {
        id: 'fetchError',
      });
    }
  }, [isError]);

  if (!data || !showColumn) return null;

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
      {data && data.length
        ? data.map((item: StatusDataType, index: number) => (
            <CardItem key={index} data={item} />
          ))
        : null}
    </Root>
  );
};

export default CardsColumn;
