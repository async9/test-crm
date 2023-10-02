import styled, { css, keyframes } from 'styled-components';
import { scrollbar } from '@/styles/mixins';
import { BREAKPOINTS } from '@/constants';

const growWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 80%;
  }
`;

const shrinkWidth = keyframes`
  from {
    width: 80%;
  }
  to {
    width: 0%;
  }
`;

export const Root = styled.aside<{ showSidebar: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  z-index: 10;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: 767px) {
    ${({ showSidebar }) =>
      showSidebar
        ? css`
            animation: ${growWidth} 0.3s ease-in forwards;
          `
        : css`
            animation: ${shrinkWidth} 0.3s ease-in forwards;
          `}
  }
  @media (${BREAKPOINTS.S}) {
    position: sticky;
    width: initial;
  }
`;

export const Top = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 1.8rem 0 1.6rem;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
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
  ${scrollbar}
`;
