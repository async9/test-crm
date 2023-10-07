import { FC } from 'react';
import { Badge, Flex, TextField } from '@radix-ui/themes';

const InputLabel: FC<{ label?: string; title?: string }> = ({
  label,
  title,
}) => {
  return (
    <Flex align='center' gap='2' style={{ marginBottom: '0.4rem' }}>
      {label ? <TextField.Slot>{label}</TextField.Slot> : null}
      {title ? (
        <Badge color='yellow' variant='soft'>
          {title}
        </Badge>
      ) : null}
    </Flex>
  );
};

export default InputLabel;
