import { BREAKPOINTS } from '@/constants';
import { label } from '@/styles/mixins';
import { bodyM, bodyS } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.aside`
  transition: 0.3s linear;
  color: ${({ theme }) => theme.colors.white};
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

export const Body = styled.div`
  padding: 2rem 0;
`;
