import { BREAKPOINTS } from '@/constants';
import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 100%;
  height: max-content;
  padding: 1rem;
  @media (${BREAKPOINTS.S}) {
    top: 64px;
    right: 1rem;
    max-width: 290px;
    height: 300px;
    padding: 0;
  }
`;
