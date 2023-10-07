import styled from 'styled-components';
import { scrollbar } from '@/styles/mixins';
import { bodyXXL } from '@/styles/typography';

export const Dialog = styled.dialog`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 0 1.8rem 1.8rem 1.8rem;
  border: none;
  outline: none;
  border-radius: 6px;
  ${scrollbar}
  &::backdrop {
    background-color: rgba(25, 29, 33, 0.85);
  }
`;

export const Top = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: max-content;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 0;
  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

export const Title = styled.h2`
  ${bodyXXL}
  font-weight: 500;
`;
