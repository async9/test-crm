import { FC } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { IconButton } from '@/styles/mixins';
import { Body, ListItem, Root, Title, Top } from './styled';
import { uiActions } from '@/store/ui/uiSlice';
import { useAppDispatch } from '@/hooks/redux';

const Navigation: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Root>
      <Top>
        <Title>Navigare rapida</Title>
        <IconButton
          onClick={() =>
            dispatch(
              uiActions.showMenu({
                variant: 'navigation',
                show: false,
              })
            )
          }
        >
          <Cross1Icon />
        </IconButton>
      </Top>
      <Body>
        <ul>
          <ListItem>Agenda de lucru</ListItem>
          <ListItem>Facturile tale</ListItem>
          <ListItem>Comenzile tale</ListItem>
        </ul>
      </Body>
    </Root>
  );
};

export default Navigation;
