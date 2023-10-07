import styled from 'styled-components';
import { scrollbar } from '@/styles/mixins';
import { bodyXXL } from '@/styles/typography';

export const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 1.8rem;
  border: none;
  outline: none;
  border-radius: 6px;
  ${scrollbar}
  &::backdrop {
    background-color: rgba(25, 29, 33, 0.85);
  }
`;

export const Title = styled.h2`
  ${bodyXXL}
  font-weight: 500;
  color: #18181a;
`;
