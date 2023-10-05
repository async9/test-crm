import { FC, useId, useRef } from 'react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { Root } from './styled';

const Menu: FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  const containerRef = useRef(null);
  const containerId = useId();

  useOnClickOutside(containerRef, (event: MouseEvent | TouchEvent) => {
    if ((event.target as HTMLElement).id !== containerId) {
      onClose();
    }
  });

  return (
    <Root id={containerId} ref={containerRef}>
      {children}
    </Root>
  );
};

export default Menu;
