import React, { useEffect, useRef } from 'react';
import { Dialog, Title, Top } from './styled';
import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from '@/styles/mixins';

const ModalWrapper: React.FC<{
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}> = ({ show, onClose, children, title }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (show) {
        dialogRef.current.showModal();
        document.body.style.overflow = 'hidden';
      } else {
        dialogRef.current.close();
        document.body.style.overflow = 'initial';
      }
    }
  }, [show]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <Dialog ref={dialogRef}>
      <Top>
        <Title>{title}</Title>
        <IconButton onClick={() => onClose()} variant='light'>
          <Cross1Icon style={{ width: '20px', height: '20px' }} />
        </IconButton>
      </Top>
      <div>{children}</div>
    </Dialog>
  );
};

export default ModalWrapper;
