import { FC } from 'react';
import {
  ButtonsContainer,
  Title,
  Root,
  TopSection,
  Column,
  SelectsContainer,
  MainSection,
  GridCards,
  Box,
  ButtonsBox,
  FiltersCard,
  CalendarButtons,
  FlexRow,
} from './styled';
import { Button, Card, Theme } from '@radix-ui/themes';
import {
  ArrowRightIcon,
  GridIcon,
  PlusIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
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
import CalendarWrapper from '@/components/CalendarWrapper/CalendarWrapper';
import { uiActions } from '@/store/ui/uiSlice';
import { useAppDispatch } from '@/hooks/redux';
import Modals from './components/Modals/Modals';
import Select from '@/components/Select/Select';

const Offers: FC = () => {
  const dispatch = useAppDispatch();
  const { isMobile } = useScreenSize();

  return (
    <Theme appearance='light' panelBackground='solid'>
      <Root style={{ backgroundColor: '#E4E7F0CC' }}>
        <TopSection>
          <Card size={isMobile ? '2' : '3'}>
            <Title>Totate lidu-rile</Title>
            <ButtonsContainer>
              <ButtonsBox>
                <Button
                  color='grass'
                  onClick={() =>
                    dispatch(
                      uiActions.showModal({
                        variant: 'newEntryForm',
                        show: true,
                      })
                    )
                  }
                >
                  <PlusIcon width='16' height='16' />
                  Adauga lead nou
                </Button>
                <Button>
                  Vezi stocuri
                  <ArrowRightIcon />
                </Button>
                <Button
                  onClick={() =>
                    dispatch(
                      uiActions.showModal({
                        variant: 'viewOptionsTable',
                        show: true,
                      })
                    )
                  }
                >
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

          <FiltersCard>
            <Card
              size={isMobile ? '2' : '3'}
              style={{
                marginTop: isMobile ? '2.4rem' : '',
              }}
            >
              <Title>Filtre</Title>
              <Column>
                <Box>
                  <FlexRow>
                    <CalendarButtons>
                      <CalendarWrapper label='Data start' />
                      <CalendarWrapper label='Data end' />
                    </CalendarButtons>
                    <Button>
                      <UpdateIcon />
                    </Button>
                  </FlexRow>
                  <Search />
                </Box>
                <SelectsContainer>
                  <Select items={selectTimeline} />
                  <Select items={selectBySearchType} />
                  <Select items={selectDealer} />
                  <Select items={selectSearchDealer} />
                  <Select items={selectDepartment} />
                  <Select items={selectAgent} />
                </SelectsContainer>
              </Column>
            </Card>
          </FiltersCard>
        </TopSection>

        <MainSection>
          <GridCards>
            <CardsColumn variant='CONTACT' label='Agenda lucru' />
            <CardsColumn variant='OFERTA' label='Oferte' />
            <CardsColumn variant='NU_ACUM' label='Nu acum' />
            <CardsColumn variant='COMANDA' label='Comenzi' />
          </GridCards>
        </MainSection>
        <Modals />
      </Root>
    </Theme>
  );
};

export default Offers;
