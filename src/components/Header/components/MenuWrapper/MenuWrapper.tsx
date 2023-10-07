import { FC, useId, useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { Root, Title, Top } from './styled';
import { IconButton } from '@/styles/mixins';
import { Cross1Icon } from '@radix-ui/react-icons';

const MenuWrapper: FC<{
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}> = ({ title, children, onClose }) => {
  const containerRef = useRef(null);
  const containerId = useId();

  useOnClickOutside(containerRef, (event: MouseEvent | TouchEvent) => {
    if ((event.target as HTMLElement).id !== containerId) {
      onClose();
    }
  });

  return (
    <Root id={containerId} ref={containerRef}>
      <Top>
        <Title>{title}</Title>
        <IconButton onClick={() => onClose()}>
          <Cross1Icon style={{ width: '20px', height: '20px' }} />
        </IconButton>
      </Top>
      {children}
    </Root>
  );
};

export default MenuWrapper;
