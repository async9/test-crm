import styled, { css } from 'styled-components';
import { BREAKPOINTS } from '../../constants';
import { bodyS, bodyXS } from '@/styles/typography';
import headerBgImage from '@/assets/images/bg-header.jpg';

export const Root = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  height: 50px;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${headerBgImage}) center / cover no-repeat;
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
  @media (${BREAKPOINTS.S}) {
    height: 60px;
  }
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
  ${bodyS}
  font-weight: 500;
`;

export const UserLabel = styled.div`
  ${bodyXS}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greyLight};
`;
