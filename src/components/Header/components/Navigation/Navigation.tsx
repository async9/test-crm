import { FC } from 'react';
import { ListItem, Root } from './styled';
import { MenuScroll } from '@/styles/mixins';

const Navigation: FC = () => {
  return (
    <Root>
      <MenuScroll>
        <ul>
          <ListItem>Agenda de lucru</ListItem>
          <ListItem>Facturile tale</ListItem>
          <ListItem>Comenzile tale</ListItem>
        </ul>
      </MenuScroll>
    </Root>
  );
};

export default Navigation;
