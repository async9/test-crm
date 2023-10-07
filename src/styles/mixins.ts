import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '@/constants';

export const DividerX = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const DividerY = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const label = css`
  text-transform: uppercase;
  font-weight: 700;
  width: max-content;
  border-radius: 0 4px 4px 0;
  padding: 0.5rem 1.2rem;
  color: #111;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const scrollbar = css`
  &::-webkit-scrollbar {
    appearance: none;
    &:hover {
      cursor: pointer;
    }
    &:vertical {
      width: 4px;
    }
    &:horizontal {
      height: 4px;
    }
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #e1e1e1;
  }
`;

export const MenuScroll = styled.div`
  min-height: 40px;
  max-height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 1rem;
  ${scrollbar}
`;

export const IconButton = styled.button<{
  $showMenu?: boolean;
  variant?: 'dark' | 'light';
}>`
  svg {
    width: 24px;
    height: 24px;
  }
  line-height: 0;
  ${({ variant }) =>
    variant === 'light'
      ? css`
          svg {
            path {
              fill: #18181a;
            }
          }
        `
      : css`
          svg {
            path {
              fill: ${({ theme }) => theme.colors.white};
            }
          }
        `}
  ${({ $showMenu }) =>
    $showMenu
      ? css`
          svg {
            path {
              fill: ${({ theme }) => theme.colors.primaryLight};
            }
          }
        `
      : null}
  @media (${BREAKPOINTS.S}) {
    svg {
      path {
        transition: 0.3s linear;
      }
    }
    &:hover {
      svg {
        path {
          fill: ${({ theme }) => theme.colors.primaryLight};
        }
      }
    }
  }
`;
