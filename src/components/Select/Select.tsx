import { FC } from 'react';
import { Select } from '@radix-ui/themes';

const SelectItems: FC<{
  defaultValue: string;
  items: { label: string; value: string }[];
  color?: any;
}> = ({ defaultValue, items, color }) => {
  const isDisabled = items.length <= 1;

  return (
    <Select.Root defaultValue={defaultValue}>
      {color ? (
        <>
          {isDisabled ? (
            <Select.Trigger disabled variant='soft' />
          ) : (
            <Select.Trigger variant='soft' />
          )}
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
          {isDisabled ? <Select.Trigger disabled /> : <Select.Trigger />}
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
  );
};

export default SelectItems;
