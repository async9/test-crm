import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';
import { bodyXL } from '@/styles/typography';
import menuCardToBgImage from '@/assets/images/bg-menu.webp';

export const Root = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 100%;
  overflow: hidden;
  @media (${BREAKPOINTS.S}) {
    top: 64px;
    right: 1rem;
    max-width: 350px;
    padding: 0;
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.colors.borderDark};
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem;
  background: url(${menuCardToBgImage}) center / cover no-repeat;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

export const Title = styled.div`
  ${bodyXL}
  font-weight: 500;
`;
