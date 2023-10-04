import { BREAKPOINTS } from '@/constants';
import { bodyL } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  min-height: 100vh;
  margin-top: 4.8rem;
  padding: 1.6rem;
  overflow: hidden;
  @media (${BREAKPOINTS.S}) {
    padding: 2.4rem;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
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
  color: #18181a;
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  }
  @media (${BREAKPOINTS.XS}) {
    &:first-child {
      padding-bottom: 0;
      padding-right: 1rem;
      border-right: 1px solid ${({ theme }) => theme.colors.greyLight};
    }
  }
  @media (${BREAKPOINTS.S}) {
    &:first-child {
      padding-right: 0;
      padding-bottom: 1rem;
      border-right: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
    }
  }
  @media (${BREAKPOINTS.L}) {
    &:first-child {
      padding-bottom: 0;
      padding-right: 1rem;
      border-bottom: none;
      border-right: 1px solid ${({ theme }) => theme.colors.greyLight};
    }
  }
`;

export const FiltersTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.M}) {
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    gap: 1rem;
  }
`;

export const InnerFiltersTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  gap: 1rem;
`;

export const SelectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.XS}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (${BREAKPOINTS.M}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (${BREAKPOINTS.L}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const MainSection = styled.section`
  overflow-x: auto;
  margin-top: 2.4rem;
  padding-bottom: 2rem;
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 100%));
  gap: 1rem;
`;
