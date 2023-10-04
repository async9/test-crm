import { FC } from 'react';
import {
  ButtonsContainer,
  Title,
  Root,
  FiltersTop,
  TopSection,
  Column,
  SelectsContainer,
  MainSection,
  GridCards,
  InnerFiltersTop,
  ButtonsBox,
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
import CardsColumn from './components/CardsColumn/CardsColumn';

const Offers: FC = () => {
  const { isMobile } = useScreenSize();

  return (
    <Theme appearance='light' panelBackground='solid'>
      <Root style={{ backgroundColor: '#E4E7F0CC' }}>
        <TopSection>
          <Card size={isMobile ? '2' : '3'}>
            <Title>Totate lidu-rile</Title>
            <ButtonsContainer>
              <ButtonsBox>
                <Button color='grass'>
                  <PlusIcon width='16' height='16' />
                  Adauga lead nou
                </Button>
                <Button>
                  Vezi stocuri
                  <ArrowRightIcon />
                </Button>
                <Button>
                  <GridIcon />
                  Visibilitate coloane
                </Button>
              </ButtonsBox>
              <ButtonsBox>
                <Button variant='outline'>Sarcini expirate</Button>
                <Button variant='outline'>Sarcini astazi</Button>
                <Button variant='outline'>Sarcini lunare</Button>
              </ButtonsBox>
            </ButtonsContainer>
          </Card>

          <Card
            size={isMobile ? '2' : '3'}
            style={{ marginTop: isMobile ? '2.4rem' : '' }}
          >
            <Title>Filtre</Title>
            <Column>
              <FiltersTop>
                <Search />
                <InnerFiltersTop>
                  <SelectItems
                    defaultValue={selectTimeline[0].value}
                    items={selectTimeline}
                    color='indigo'
                  />
                  <Button>
                    <UpdateIcon />
                  </Button>
                </InnerFiltersTop>
              </FiltersTop>
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
            <CardsColumn variant='CONTACT' label='Agenda lucru' />
            <CardsColumn variant='OFERTA' label='Oferte' />
            <CardsColumn variant='NU_ACUM' label='Nu acum' />
            <CardsColumn variant='COMANDA' label='Comenzi' />
          </GridCards>
        </MainSection>
      </Root>
    </Theme>
  );
};

export default Offers;
