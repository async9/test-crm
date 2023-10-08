import { FC } from 'react';
import { Button } from '@radix-ui/themes';
import { Cross2Icon } from '@radix-ui/react-icons';
import { QueryAdditionalAssigmentType } from '../../types';

export const StatusButton: FC<{
  status: QueryAdditionalAssigmentType;
  children: React.ReactNode;
  handleStatus: (status: QueryAdditionalAssigmentType) => void;
  currentStatus: QueryAdditionalAssigmentType | null;
}> = ({ status, children, handleStatus, currentStatus }) => {
  return (
    <Button onClick={() => handleStatus(status)} variant='outline'>
      {children}
      {currentStatus === status ? <Cross2Icon /> : null}
    </Button>
  );
};
