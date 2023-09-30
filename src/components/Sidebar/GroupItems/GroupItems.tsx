import { FC } from 'react';
import SVG from 'react-inlinesvg';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { Root, Label, Icon, Row, TriggerText } from './styled';
import { icons } from '../constants';

const GroupItems: FC<{ label: string; items: any[] }> = ({ label, items }) => {
  return (
    <Root>
      <Label>{label}</Label>
      <Accordion.Root type='single' defaultValue='item-1'>
        {items.map((item, index) => (
          <Accordion.Item key={index} value={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger>
                <Row>
                  <Icon>
                    <SVG
                      src={icons[item.icon.split('-')[2]] || ''}
                      title='Icon'
                    />
                  </Icon>
                  <TriggerText>{item.label}</TriggerText>
                  <ChevronDownIcon aria-hidden />
                </Row>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <ul>
                {item.content.map((item: any, index: number) => (
                  <li key={index}>
                    <a
                      href={`${import.meta.env.VITE_DOMAIN}/${item.to}`}
                      target='_blank'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Root>
  );
};

export default GroupItems;
