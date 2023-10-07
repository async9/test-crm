import { BREAKPOINTS } from '@/constants';
import { bodyS } from '@/styles/typography';
import styled, { css } from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const Trigger = styled.div<{ disabled: boolean }>`
  ${bodyS}
  color: #111;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem 0 1.2rem;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.3;
          background-color: ${({ theme }) => theme.colors.greyLight};
        `
      : null}
  @media (${BREAKPOINTS.S}) {
    cursor: pointer;
    ${({ disabled }) =>
      disabled
        ? css`
            cursor: not-allowed;
          `
        : null}
  }
`;

export const Content = styled.div<{ showContent: boolean }>`
  display: none;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: 0.1s ease-in;
  pointer-events: none;
  ${({ showContent }) =>
    showContent
      ? css`
          display: block;
          pointer-events: visible;
        `
      : null}
`;

export const List = styled.ul`
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  box-shadow: 1px 17px 29px 3px rgba(0, 0, 0, 0.12);
`;

export const Item = styled.li`
  ${bodyS}
  height: 32px;
  display: flex;
  align-items: center;
  color: #111;
  border-radius: 4px;
  @media (${BREAKPOINTS.S}) {
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Icon = styled.span<{ showContent: boolean }>`
  line-height: 0;
  ${({ showContent }) =>
    showContent
      ? css`
          transform: rotate(-180deg);
        `
      : null}
`;

export const CheckIconWrapper = styled.span<{ checked: boolean }>`
  opacity: 0;
  line-height: 0;
  margin: 0 0.4rem;
  ${({ checked }) =>
    checked
      ? css`
          opacity: 1;
        `
      : null}
`;
