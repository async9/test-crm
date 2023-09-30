import { FC } from 'react';
import { Select } from '@radix-ui/themes';

const SelectItems: FC<{
  defaultValue: string;
  items: { label: string; value: string }[];
  color?: any;
}> = ({ defaultValue, items, color }) => {
  return (
    <>
      <Select.Root defaultValue={defaultValue}>
        {color ? (
          <>
            <Select.Trigger color={color} variant='soft' />
            <Select.Content color={color} position='popper'>
              {items.map((item, index) => (
                <Select.Item key={index} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </>
        ) : (
          <>
            <Select.Trigger />
            <Select.Content position='popper'>
              {items.map((item, index) => (
                <Select.Item key={index} value={item.value}>
                  {item.label}
                </Select.Item>
              ))}
            </Select.Content>
          </>
        )}
      </Select.Root>
    </>
  );
};

export default SelectItems;
