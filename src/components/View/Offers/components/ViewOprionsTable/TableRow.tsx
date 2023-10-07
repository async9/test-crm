import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowOffersDataColumn } from '@/store/ui/uiSelector';
import { UiOffersColumnType } from '@/types/ui/types';
import { Checkbox, Table } from '@radix-ui/themes';
import { uiActions } from '@/store/ui/uiSlice';

const TableRow: FC<{ label: string; variant: UiOffersColumnType }> = ({
  label,
  variant,
}) => {
  const showColumn = useAppSelector((state) =>
    selectShowOffersDataColumn(state, variant)
  );
  const dispatch = useAppDispatch();

  return (
    <Table.Row>
      <Table.RowHeaderCell>{label}</Table.RowHeaderCell>
      <Table.Cell
        onClick={() =>
          dispatch(
            uiActions.displayOffersDataColumns({ variant, show: !showColumn })
          )
        }
      >
        <Checkbox checked={showColumn} />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
