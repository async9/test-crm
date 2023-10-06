import React, { useEffect, useRef } from 'react';
import { Dialog, Title } from './styled';
import { Flex } from '@radix-ui/themes';
import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from '@/styles/mixins';

const ModalWrapper: React.FC<{
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}> = ({ show, onClose, children, title }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (show) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
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

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return (
    <Dialog role='presentation' ref={dialogRef} onClick={handleBackdropClick}>
      <Flex align='center' justify='between'>
        <Title>{title}</Title>
        <IconButton onClick={() => onClose()} variant='light'>
          <Cross1Icon />
        </IconButton>
      </Flex>
      <div ref={contentRef}>{children}</div>
    </Dialog>
  );
};

export default ModalWrapper;
