import { FC } from 'react';
import { Spin } from './styled';

const Loader: FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return <Spin />;
};

export default Loader;
