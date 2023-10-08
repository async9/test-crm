import styled from 'styled-components';
import bgImage from '@/assets/images/bg.webp';
import { BREAKPOINTS } from '@/constants';

export const Root = styled.div`
  height: 100vh;
  width: 100wh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${bgImage}) center / cover no-repeat;
  padding: 0 1.6rem;
  @media (${BREAKPOINTS.S}) {
    padding: 0;
  }
`;
