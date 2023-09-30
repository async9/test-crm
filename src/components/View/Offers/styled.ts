import { bodyL } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  min-height: 100vh;
  padding: 2.4rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const DividerX = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const TopSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 2.4rem;
`;

export const MainSection = styled.section`
  margin: 2.4rem 0;
`;

export const Title = styled.div`
  ${bodyL}
  color: #18181a;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const ButtonsBox = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FiltersTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.1fr;
  gap: 1rem;
`;

export const SelectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
