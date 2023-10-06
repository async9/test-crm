import { FC } from 'react';
import { TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Search: FC<{ placeholder?: string }> = ({ placeholder = 'Search' }) => {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MagnifyingGlassIcon height='16' width='16' />
      </TextField.Slot>
      <TextField.Input placeholder={placeholder} />
    </TextField.Root>
  );
};

export default Search;
