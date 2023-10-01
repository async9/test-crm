import { BREAKPOINTS } from '@/constants';
import { scrollbar } from '@/styles/mixins';
import styled from 'styled-components';

export const Root = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Top = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 1.6rem;
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
  height: 892px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 0;
  margin-right: 0.6rem;
  ${scrollbar}
`;
