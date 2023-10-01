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
    grid-template-columns: 2fr 5fr;
    gap: 2.4rem;
  }
`;

export const Title = styled.div`
  ${bodyL}
  color: #18181a;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  /* @media (min-width: 540px) {
    flex-direction: row;
  } */
`;

export const FiltersTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.1fr;
  gap: 1rem;
`;

export const SelectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-columns: repeat(auto-fill, 200px); */
  gap: 1rem;
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
