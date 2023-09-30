import { BREAKPOINTS } from '@/constants';
import { label } from '@/styles/mixins';
import { bodyS, bodyXS, bodyXXS } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: 50px;
  z-index: 9;
  right: 0;
  width: 290px;
  overflow: hidden;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bgColors.primary};
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
  overflow: auto;
  height: 250px;
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
  padding: 0.8rem 1.8rem;
`;

export const ListItem = styled.li`
  ${bodyS}
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  color: ${({ theme }) => theme.colors.greyLight};
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
