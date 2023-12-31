import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';
import { bodyL } from '@/styles/typography';

export const Root = styled.div`
  min-height: 100vh;
  margin-top: 5rem;
  padding: 1.6rem;
  overflow: hidden;
  @media (${BREAKPOINTS.S}) {
    margin-top: 6rem;
    padding: 2.4rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  @media (${BREAKPOINTS.L}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  @media (${BREAKPOINTS.S}) {
    display: grid;
    grid-template-columns: 3fr 5fr;
    gap: 2.4rem;
  }
`;

export const Title = styled.div`
  ${bodyL}
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.XS}) {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
  }
  @media (${BREAKPOINTS.S}) {
    display: flex;
    flex-direction: column;
  }
  @media (${BREAKPOINTS.L}) {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:first-child {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  }
  @media (${BREAKPOINTS.XS}) {
    &:first-child {
      padding-bottom: 0;
      padding-right: 1rem;
      border-right: 1px solid ${({ theme }) => theme.colors.borderLight};
    }
  }
  @media (${BREAKPOINTS.S}) {
    &:first-child {
      padding-right: 0;
      padding-bottom: 1rem;
      border-right: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
    }
  }
  @media (${BREAKPOINTS.L}) {
    &:first-child {
      padding-bottom: 0;
      padding-right: 1rem;
      border-bottom: none;
      border-right: 1px solid ${({ theme }) => theme.colors.borderLight};
    }
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.M}) {
    display: grid;
    grid-template-columns: max-content 1fr;
  }
  @media (${BREAKPOINTS.L}) {
    display: flex;
    flex-direction: column;
  }
`;

export const InnerFiltersTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  gap: 1rem;
`;

export const EvenColumns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.M}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const SelectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.XS}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MainSection = styled.section`
  overflow-x: auto;
  margin-top: 2.4rem;
  padding-bottom: 2rem;
`;

export const GridCards = styled.div`
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`;

export const FiltersCard = styled.div`
  height: 100%;
  & .rt-CardInner {
    overflow: visible;
  }
`;

export const CalendarButtons = styled.div`
  display: flex;
  gap: 1rem;
`;
