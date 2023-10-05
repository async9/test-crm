import { BREAKPOINTS } from '@/constants';
import { scrollbar } from '@/styles/mixins';
import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 100%;
  padding: 1rem;
  overflow-y: scroll;
  ${scrollbar}
  @media (${BREAKPOINTS.S}) {
    top: 64px;
    right: 1rem;
    max-width: 350px;
    padding: 0;
  }
`;
