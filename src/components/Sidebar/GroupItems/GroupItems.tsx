import { FC } from 'react';
import SVG from 'react-inlinesvg';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Label, Icon, Row, TriggerText, ListItem, LinkItem } from './styled';
import { icons } from '../constants';
import { selectShowSidebar } from '@/store/ui/uiSelector';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { uiActions } from '@/store/ui/uiSlice';

const GroupItems: FC<{ label: string; items: any[] }> = ({ label, items }) => {
  const showSidebar = useAppSelector(selectShowSidebar);
  const dispatch = useAppDispatch();

  return (
    <div>
      {showSidebar ? <Label>{label}</Label> : null}
      <Accordion.Root type='single' collapsible style={{ padding: '2rem' }}>
        {items.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            style={{ marginBottom: '2rem' }}
          >
            <Accordion.Header
              onClick={() => dispatch(uiActions.showSidebar(true))}
            >
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
                  <TriggerText showSidebar={showSidebar}>
                    {item.label}
                  </TriggerText>
                  {showSidebar ? <ChevronDownIcon aria-hidden /> : null}
                </Row>
              </Accordion.Trigger>
            </Accordion.Header>
            {showSidebar ? (
              <Accordion.Content
                style={{
                  margin: '0 0 1.2rem 1.2rem',
                  paddingLeft: '1rem',
                  borderLeft: '1px solid #999',
                }}
              >
                <ul>
                  {item.content.map((item: any, index: number) => (
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
              </Accordion.Content>
            ) : null}
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default GroupItems;
