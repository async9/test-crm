import { BREAKPOINTS } from '@/constants';
import styled from 'styled-components';

export const Root = styled.aside<{ active: boolean }>`
  transition: 0.3s linear;
  background-color: ${({ theme }) => theme.bgColors.primary};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Top = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.white};
  svg {
    width: 24px;
    height: 24px;
  }
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
    &:hover {
      svg {
        path {
          fill: ${({ theme }) => theme.colors.primaryLight};
        }
      }
    }
  }
`;
