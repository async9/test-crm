import { BREAKPOINTS } from '@/constants';
import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const CalendarContainer = styled.div<{ positionRight: boolean }>`
  position: absolute;
  top: 3.6rem;
  left: 0;
  z-index: 2;
  & > div {
    width: 290px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.greyLight};
  }
  @media (${BREAKPOINTS.S}) {
    left: 50%;
    transform: translateX(-50%);
  }
  ${({ positionRight }) =>
    positionRight
      ? css`
          left: auto;
          right: -6rem;
          @media (${BREAKPOINTS.S}) {
            right: unset;
          }
        `
      : null}
`;
