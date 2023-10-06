import { BREAKPOINTS } from '@/constants';
import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  max-width: 100%;
`;

export const Box = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (${BREAKPOINTS.S}) {
    flex-direction: row;
  }
`;

export const ButtonsGoup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  @media (${BREAKPOINTS.S}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
