import styled from 'styled-components';
import { scrollbar } from '@/styles/mixins';

export const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0;
  border: none;
  outline: none;
  padding: 1.8rem;
  border-radius: 6px;
  ${scrollbar}
  &::backdrop {
    background-color: rgba(25, 29, 33, 0.85);
  }
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  color: #18181a;
`;
