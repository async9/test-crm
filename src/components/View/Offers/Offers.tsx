import { FC } from 'react';
import {
  ButtonsBox,
  CardTitle,
  Root,
  FiltersTop,
  TopSection,
  DividerX,
  Column,
  SelectsContainer,
} from './styled';
import { Button, Card, Theme } from '@radix-ui/themes';
import {
  ArrowRightIcon,
  GridIcon,
  PlusIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import SelectItems from '@/components/Select/Select';
import {
  selectAgent,
  selectBySearchType,
  selectDealer,
  selectDepartment,
  selectSearchDealer,
} from './constants';
import Search from '@/components/Search/Search';
import useScreenSize from '@/hooks/useScreenSize';

// Use for as tags/statuses/etc.
{
  /* <Badge color="orange">In progress</Badge>
<Badge color="blue">In review</Badge>
<Badge color="green">Complete</Badge> */
}

const Offers: FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <Theme appearance='light' panelBackground='solid'>
      <Root style={{ backgroundColor: '#E4E7F0CC' }}>
        <TopSection>
          <Card size={isMobile ? '2' : '3'}>
            <CardTitle>Totate lidu-rile</CardTitle>
            <ButtonsBox>
              <Button color='grass'>
                <PlusIcon width='16' height='16' /> Adauga lead nou
              </Button>
              <Button>
                <ArrowRightIcon />
                Vezi stocuri
              </Button>
              <Button>
                <GridIcon />
                Visibilitate coloane
              </Button>
              <DividerX />
              <Button variant='outline'>Sarcini expirate</Button>
              <Button variant='outline'>Sarcini astazi</Button>
              <Button variant='outline'>Sarcini lunare</Button>
            </ButtonsBox>
          </Card>

          <Card size={isMobile ? '2' : '3'}>
            <CardTitle>Filtre</CardTitle>
            <Column>
              <FiltersTop>
                <Search />
                <SelectItems
                  defaultValue={selectBySearchType[0].value}
                  items={selectBySearchType}
                  color='indigo'
                />
                <Button>
                  <UpdateIcon />
                </Button>
              </FiltersTop>
              <DividerX />
              <SelectsContainer>
                <SelectItems
                  defaultValue={selectBySearchType[0].value}
                  items={selectBySearchType}
                />
                <SelectItems
                  defaultValue={selectDealer[0].value}
                  items={selectDealer}
                />
                <SelectItems
                  defaultValue={selectSearchDealer[0].value}
                  items={selectSearchDealer}
                />
                <SelectItems
                  defaultValue={selectDepartment[0].value}
                  items={selectDepartment}
                />
                <SelectItems
                  defaultValue={selectAgent[0].value}
                  items={selectAgent}
                />
              </SelectsContainer>
            </Column>
          </Card>
        </TopSection>
        <div></div>
      </Root>
    </Theme>
  );
};

export default Offers;
