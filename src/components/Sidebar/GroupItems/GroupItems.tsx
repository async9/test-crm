import { FC } from 'react';
import SVG from 'react-inlinesvg';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import {
  Label,
  Icon,
  Row,
  TriggerText,
  ListItem,
  LinkItem,
  AccordionContent,
} from './styled';
import { icons } from '../constants';
import { selectShowMenu } from '@/store/ui/uiSelector';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { uiActions } from '@/store/ui/uiSlice';
import { SidebarDataType } from '@/types/ui/types';

const GroupItems: FC<{ data: SidebarDataType }> = ({ data }) => {
  const dispatch = useAppDispatch();
  const showSidebarMenu = useAppSelector((state) =>
    selectShowMenu(state, 'sidebar')
  );

  const handleShowMenu = () => {
    if (!showSidebarMenu) {
      dispatch(
        uiActions.showMenu({
          variant: 'sidebar',
          show: true,
        })
      );
    }
  };

  return (
    <div>
      {showSidebarMenu ? <Label>{data.header}</Label> : null}
      <Accordion.Root type='single' collapsible style={{ padding: '2rem' }}>
        {data.content.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            style={{ marginBottom: '2rem' }}
          >
            <Accordion.Header onClick={handleShowMenu}>
              <Accordion.Trigger>
                <Row>
                  <Icon>
                    <SVG
                      src={icons[item.icon.split('-')[2]] || ''}
                      width={24}
                      height={24}
                      title='Icon'
                    />
                  </Icon>
                  <TriggerText $showSidebarMenu={showSidebarMenu}>
                    {item.label}
                  </TriggerText>
                  {showSidebarMenu ? <ChevronDownIcon aria-hidden /> : null}
                </Row>
              </Accordion.Trigger>
            </Accordion.Header>
            {showSidebarMenu ? (
              <AccordionContent>
                <ul>
                  {item.content.map((item, index: number) => (
                    <ListItem key={index}>
                      <LinkItem
                        href={`${import.meta.env.VITE_DOMAIN}/${item.to}`}
                        target='_blank'
                      >
                        {item.label}
                      </LinkItem>
                    </ListItem>
                  ))}
                </ul>
              </AccordionContent>
            ) : null}
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default GroupItems;
