import { menuCardTop } from '@/styles/mixins';
import { bodyXL } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 6px;
  background-color: #111;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${menuCardTop}
`;

export const Body = styled.div`
  min-height: 50px;
  padding: 1.8rem;
`;

export const Title = styled.div`
  ${bodyXL}
  font-weight: 500;
`;
