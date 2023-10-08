import { FC, useState } from 'react';
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
import { Button, Card } from '@radix-ui/themes';
import {
  ArrowRightIcon,
  Cross2Icon,
  GridIcon,
  PlusIcon,
  UpdateIcon,
} from '@radix-ui/react-icons';
import {
  dataColumns,
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
import { QueryAdditionalAssigmentType } from './types';
import { StatusButton } from './components/StatusButton/StatusButton';

const Offers: FC = () => {
  const dispatch = useAppDispatch();
  const { isMobile } = useScreenSize();
  const [additionalStatus, setAdditionalStatus] =
    useState<QueryAdditionalAssigmentType | null>(null);

  const handleAdditionalStatus = (status: QueryAdditionalAssigmentType) => {
    if (additionalStatus && additionalStatus === status) {
      setAdditionalStatus(null);
    } else {
      setAdditionalStatus(status);
    }
  };

  return (
    <Root>
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
              <StatusButton
                status={'ASSIGNMENTS_EXPIRED'}
                handleStatus={handleAdditionalStatus}
                currentStatus={additionalStatus}
              >
                {'Sarcini expirate'}
              </StatusButton>
              <StatusButton
                status={'ASSIGNMENTS_FOR_TODAY'}
                handleStatus={handleAdditionalStatus}
                currentStatus={additionalStatus}
              >
                {'Sarcini astazi'}
              </StatusButton>
              <StatusButton
                status={'ASSIGNMENTS_FOR_THIS_MONTH'}
                handleStatus={handleAdditionalStatus}
                currentStatus={additionalStatus}
              >
                {'Sarcini lunare'}
              </StatusButton>
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
          {dataColumns.map((item) => (
            <CardsColumn
              key={item.id}
              variant={item.variant}
              label={item.label}
              query={item.query}
              additionalStatus={additionalStatus}
            />
          ))}
        </GridCards>
      </MainSection>
      <Modals />
    </Root>
  );
};

export default Offers;
