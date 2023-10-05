import styled, { css, keyframes } from 'styled-components';
import { scrollbar } from '@/styles/mixins';
import { BREAKPOINTS } from '@/constants';

const growWidth = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 70%;
  }
`;

const growWidthS = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 40%;
  }
`;

const growWidthM = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 30%;
  }
`;

const shrinkWidth = keyframes`
  from {
    width: 70%;
  }
  to {
    width: 0%;
  }
`;

const shrinkWidthS = keyframes`
  from {
    width: 40%;
  }
  to {
    width: 0%;
  }
`;

const shrinkWidthM = keyframes`
  from {
    width: 30%;
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
  ${({ showSidebar }) =>
    showSidebar
      ? css`
          animation: ${growWidth} 0.3s ease-in forwards;
        `
      : css`
          animation: ${shrinkWidth} 0.3s ease-in forwards;
        `}
  @media (${BREAKPOINTS.S}) {
    min-width: 64px;
    ${({ showSidebar }) =>
      showSidebar
        ? css`
            animation: ${growWidthS} 0.3s ease-in forwards;
          `
        : css`
            animation: ${shrinkWidthS} 0.3s ease-in forwards;
          `};
  }
  @media (max-width: 1439px) {
    ${({ showSidebar }) =>
      showSidebar
        ? css`
            animation: ${growWidthM} 0.3s ease-in forwards;
          `
        : css`
            animation: ${shrinkWidthM} 0.3s ease-in forwards;
          `}
  }
  @media (${BREAKPOINTS.L}) {
    position: sticky;
    width: initial;
    animation: none;
  }
`;

export const Top = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 1.8rem 0 1.6rem;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  @media (${BREAKPOINTS.S}) {
    height: 60px;
  }
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
