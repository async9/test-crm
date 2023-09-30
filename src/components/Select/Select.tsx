import { Select } from '@radix-ui/themes';
import { FC } from 'react';

const SelectItems: FC<{
  defaultValue: string;
  items: { label: string; value: string }[];
  color?: any;
}> = ({ defaultValue, items, color }) => {
  return (
    <>
      <Select.Root defaultValue={defaultValue}>
        <Select.Trigger color={color || ''} />
        <Select.Content color={color || ''} position='popper'>
          {items.map((item, index) => (
            <Select.Item key={index} value={item.value}>
              {item.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default SelectItems;
