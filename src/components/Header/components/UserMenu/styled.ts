import { BREAKPOINTS } from '@/constants';
import { label } from '@/styles/mixins';
import { bodyM, bodyS } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 6px;
  background-color: #111;
`;

export const Top = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  background-color: ${({ theme }) => theme.colors.greyDark};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  margin-left: 1rem;
`;

export const Body = styled.div`
  padding: 2rem 0;
`;

export const Label = styled.div`
  ${bodyS}
  ${label}
`;

export const Group = styled.div`
  margin-bottom: 2rem;
`;

export const List = styled.ul`
  padding: 1rem;
`;

export const ListItem = styled.li`
  ${bodyM}
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
