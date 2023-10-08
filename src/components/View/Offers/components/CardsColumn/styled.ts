import { bodyL } from '@/styles/typography';
import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 400px;
`;

export const Title = styled.div`
  ${bodyL}
  font-weight: 700;
`;

export const LoaderPosition = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateY(-50%);
`;
