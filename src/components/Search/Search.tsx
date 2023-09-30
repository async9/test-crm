import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { FC } from 'react';

const Search: FC = () => {
  return (
    <TextField.Root>
      <TextField.Slot>
        <MagnifyingGlassIcon height='16' width='16' />
      </TextField.Slot>
      <TextField.Input placeholder='Search' />
    </TextField.Root>
  );
};

export default Search;
