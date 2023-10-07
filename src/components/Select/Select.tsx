import { FC, useId, useRef, useState } from 'react';
import {
  CheckIconWrapper,
  Content,
  Icon,
  Item,
  List,
  Root,
  Trigger,
} from './styled';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

type ItemType = {
  label: string;
  value: string;
};

const itemId = 'selectItem';

const Select: FC<{
  items: ItemType[];
}> = ({ items }) => {
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>(items[0]);
  const containerRef = useRef(null);
  const containerId = useId();

  const disabled = items.length <= 1;

  useOnClickOutside(containerRef, (event: MouseEvent | TouchEvent) => {
    if ((event.target as HTMLElement).id !== containerId) {
      if (showContent) {
        setShowContent(false);
      }
    }
  });

  const handleSelectItem = (event: React.MouseEvent<HTMLDivElement>) => {
    const listItem = (event.target as HTMLElement).closest<HTMLLIElement>(
      '#' + itemId
    );
    if (listItem) {
      const data = listItem.dataset.selectItem;
      if (data) {
        try {
          const itemData = JSON.parse(data);
          setSelectedItem(itemData);
          setShowContent((prevState) => !prevState);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const handleShowContent = () => {
    if (!disabled) {
      setShowContent((prevState) => !prevState);
    }
  };

  return (
    <Root id={containerId} ref={containerRef}>
      <Trigger onClick={handleShowContent} disabled={disabled}>
        {selectedItem.label}
        <Icon $showContent={showContent}>
          <ChevronDownIcon />
        </Icon>
      </Trigger>
      <Content
        onClick={handleSelectItem}
        $showContent={showContent && !disabled}
      >
        <List>
          {items.map((item, index) => (
            <Item
              id={itemId}
              key={index}
              data-select-item={JSON.stringify({
                label: item.label,
                value: item.value,
              })}
            >
              <CheckIconWrapper checked={item.value === selectedItem.value}>
                <CheckIcon />
              </CheckIconWrapper>
              {item.label}
            </Item>
          ))}
        </List>
      </Content>
    </Root>
  );
};

export default Select;
