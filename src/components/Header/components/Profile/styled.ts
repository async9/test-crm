import { BREAKPOINTS } from '@/constants';
import { menuCardTop, label } from '@/styles/mixins';
import { bodyM, bodyS, bodyXL } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 6px;
  background-color: #111;
`;

export const Top = styled.div`
  ${menuCardTop}
`;

export const InnerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const Title = styled.div`
  ${bodyXL}
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  margin-left: 1rem;
`;

export const Body = styled.div`
  padding-top: 2rem;
`;

export const Label = styled.div`
  ${bodyS}
  ${label}
`;

export const Group = styled.div`
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
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
