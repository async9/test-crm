import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';
import { bodyM } from '@/styles/typography';

export const Root = styled.div`
  padding: 1.8rem;
  background-color: #111;
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
