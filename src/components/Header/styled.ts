import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../constants';
import { bodyXS, bodyXXS } from '@/styles/typography';

export const Root = styled.header`
  height: 48px;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgColors.primary};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.6rem;
`;

export const Divider = styled.div`
  width: 1px;
  height: 28px;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

const buttonStyles = css`
  line-height: 0;
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

export const IconButton = styled.button<{ showMenu?: boolean }>`
  ${buttonStyles}
  svg {
    width: 24px;
    height: 24px;
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  ${({ showMenu }) =>
    showMenu
      ? css`
          svg {
            path {
              fill: ${({ theme }) => theme.colors.primaryLight};
            }
          }
        `
      : null}
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InnerBox = styled.div`
  ${bodyXS}
  margin-left: 1rem;
`;

export const UserName = styled.div`
  ${bodyXS}
  font-weight: 500;
`;

export const UserLabel = styled.div`
  ${bodyXXS}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greyLight};
`;
