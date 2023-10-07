import { BREAKPOINTS } from '@/constants';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ $showSidebarMenu: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey};
  @media (${BREAKPOINTS.S}) {
    display: grid;
    grid-template-columns: 64px calc(100vw - 64px);
    transition: 0.3s ease-in;
  }
  @media (${BREAKPOINTS.L}) {
    ${({ $showSidebarMenu }) =>
      $showSidebarMenu
        ? css`
            grid-template-columns: 280px calc(100vw - 280px);
          `
        : null}
  }
`;
