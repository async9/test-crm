import { FC } from 'react';
import {
  ButtonsBox,
  Title,
  Root,
  FiltersTop,
  TopSection,
  DividerX,
  Column,
  SelectsContainer,
  MainSection,
  GridCards,
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
  selectTimeline,
} from './constants';
import Search from '@/components/Search/Search';
import useScreenSize from '@/hooks/useScreenSize';
import StatusColumn from './components/StatusColumn/StatusColumn';

const Offers: FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <Theme appearance='light' panelBackground='solid'>
      <Root style={{ backgroundColor: '#E4E7F0CC' }}>
        <TopSection>
          <Card size={isMobile ? '2' : '3'}>
            <Title>Totate lidu-rile</Title>
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
            <Title>Filtre</Title>
            <Column>
              <FiltersTop>
                <Search />
                <SelectItems
                  defaultValue={selectTimeline[0].value}
                  items={selectTimeline}
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

        <MainSection>
          <GridCards>
            <StatusColumn variant='CONTACT' label='Agenda lucru' />
            <StatusColumn variant='OFERTA' label='Oferte' />
            <StatusColumn variant='NU_ACUM' label='Nu acum' />
            <StatusColumn variant='COMANDA' label='Comenzi' />
          </GridCards>
        </MainSection>
      </Root>
    </Theme>
  );
};

export default Offers;
