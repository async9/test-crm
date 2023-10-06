import { FC } from 'react';
import { Root, Spin } from './styled';

const Loader: FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return (
    <Root>
      <Spin />
    </Root>
  );
};

export default Loader;
