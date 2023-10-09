import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';
import { label } from '@/styles/mixins';
import { bodyM, bodyS, bodyXL } from '@/styles/typography';

export const Root = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 0 1.6rem 0;
  margin: 0 1.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
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
  color: ${({ theme }) => theme.colors.textGrey};
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
