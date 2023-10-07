import { BREAKPOINTS } from '@/constants';
import styled from 'styled-components';

export const Form = styled.form`
  width: 560px;
  max-width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3.6rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (${BREAKPOINTS.S}) {
    flex-direction: row;
  }
`;

export const InnerBox = styled.div`
  width: 100%;
`;

export const Checkboxes = styled.div`
  display: flex;
  column-gap: 3rem;
  margin-bottom: 2rem;
`;

export const ButtonsGoup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;
  gap: 2rem;
  @media (${BREAKPOINTS.S}) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
