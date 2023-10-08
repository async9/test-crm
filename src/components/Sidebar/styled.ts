import styled, { css, keyframes } from 'styled-components';
import { BREAKPOINTS } from '@/constants';
import { scrollbar } from '@/styles/mixins';
import sidebarBgImage from '@/assets/images/bg-sidebar.jpg';

const growWidth = keyframes`
  from {
    width: 0;
  }
  to {
    width: 300px;
  }
`;

const shrinkWidth = keyframes`
  from {
    width: 300px;
  }
  to {
    width: 0;
  }
`;

export const Root = styled.aside<{ $showSidebarMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 0;
  z-index: 10;
  overflow: hidden;
  background: url(${sidebarBgImage}) center / cover no-repeat;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.6;
    background-color: #111;
  }
  color: ${({ theme }) => theme.colors.white};
  ${({ $showSidebarMenu }) =>
    $showSidebarMenu
      ? css`
          animation: ${growWidth} 0.3s ease-in forwards;
        `
      : css`
          animation: ${shrinkWidth} 0.3s ease-in forwards;
        `}
  @media (${BREAKPOINTS.S}) {
    min-width: 64px;
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
  border-right: 1px solid ${({ theme }) => theme.colors.borderDark};
  @media (${BREAKPOINTS.S}) {
    height: 60px;
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.textLight};
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
  padding-right: 1rem;
`;

export const List = styled.div`
  height: 892px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2rem 0;
  ${scrollbar}
`;
