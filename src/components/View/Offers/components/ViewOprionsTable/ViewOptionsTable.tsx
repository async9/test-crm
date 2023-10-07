import { FC } from 'react';
import { ButtonBox, Root } from './styled';
import { Button, Table } from '@radix-ui/themes';
import { tableData } from './constants';
import TableRow from './TableRow';
import { useAppDispatch } from '@/hooks/redux';
import { uiActions } from '@/store/ui/uiSlice';

const ViewOptionsTable: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Root>
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Denumire</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Vizibilitatea</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableData.map((item, index) => (
            <TableRow key={index} label={item.label} variant={item.variant} />
          ))}
        </Table.Body>
      </Table.Root>
      <ButtonBox>
        <Button
          onClick={() =>
            dispatch(
              uiActions.showModal({ variant: 'viewOptionsTable', show: false })
            )
          }
          size='3'
          style={{ width: '120px' }}
        >
          Okay
        </Button>
      </ButtonBox>
    </Root>
  );
};

export default ViewOptionsTable;
