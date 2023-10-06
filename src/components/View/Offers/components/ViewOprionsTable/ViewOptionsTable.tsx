import { FC } from 'react';
import { Button, Checkbox, Table } from '@radix-ui/themes';
import { ButtonBox, Root } from './styled';

const ViewOptionsTable: FC = () => {
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
          <Table.Row>
            <Table.RowHeaderCell>Prospecte</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Agenda lucru</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox defaultChecked />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Oferte</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox defaultChecked />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Nu acum</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox defaultChecked />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Comenzi</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox defaultChecked />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Facturi</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.RowHeaderCell>Refuz client</Table.RowHeaderCell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <ButtonBox>
        <Button color='green' style={{ width: '200px' }}>
          Save
        </Button>
      </ButtonBox>
    </Root>
  );
};

export default ViewOptionsTable;
