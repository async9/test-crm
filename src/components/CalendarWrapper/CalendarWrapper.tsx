import { FC, useId, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarContainer, Root } from './styled';
import { Button } from '@radix-ui/themes';
import { CalendarIcon } from '@radix-ui/react-icons';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarWrapper: FC<{ label: 'Data start' | 'Data end' }> = ({
  label,
}) => {
  const [show, setShow] = useState(false);
  const [value, onChange] = useState<Value>(new Date());
  const containerRef = useRef(null);
  const calendarId = useId();

  useOnClickOutside(containerRef, (event: MouseEvent | TouchEvent) => {
    if ((event.target as HTMLElement).id !== calendarId) {
      setShow(false);
    }
  });

  return (
    <Root>
      <Button
        style={{ width: '100%' }}
        onClick={() => setShow((prevState) => !prevState)}
      >
        <CalendarIcon width='16' height='16' />
        {label}
      </Button>
      {show ? (
        <CalendarContainer
          positionRight={label === 'Data end'}
          id={calendarId}
          ref={containerRef}
        >
          <Calendar onChange={onChange} value={value} />
        </CalendarContainer>
      ) : null}
    </Root>
  );
};

export default CalendarWrapper;
