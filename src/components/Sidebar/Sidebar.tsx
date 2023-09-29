import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectShowSidebar } from '@/store/ui/uiSelector';
import { FC } from 'react';
import { Button, Root, Top } from './styled';
import { uiActions } from '@/store/ui/uiSlice';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

const Sidebar: FC = () => {
  const showSidebar = useAppSelector(selectShowSidebar);
  const dispatch = useAppDispatch();

  return (
    <Root active={showSidebar}>
      <Top>
        <Button onClick={() => dispatch(uiActions.showSidebar(!showSidebar))}>
          {showSidebar ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </Button>
      </Top>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Root>
  );
};

export default Sidebar;
