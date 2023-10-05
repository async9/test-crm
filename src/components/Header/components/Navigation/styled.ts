import { BREAKPOINTS } from '@/constants';
import { menuCardTop } from '@/styles/mixins';
import { bodyM, bodyXL } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 6px;
  background-color: #111;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${menuCardTop}
`;

export const Body = styled.div`
  min-height: 50px;
  padding: 1.8rem;
`;

export const Title = styled.div`
  ${bodyXL}
  font-weight: 500;
`;

export const ListItem = styled.li`
  ${bodyM}
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5rem 1.2rem;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
