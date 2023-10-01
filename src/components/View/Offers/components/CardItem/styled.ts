import { bodyM } from '@/styles/typography';
import styled from 'styled-components';

export const Title = styled.div`
  ${bodyM}
  font-weight: 700;
  color: #111;
  margin-bottom: 1rem;
`;

export const Text = styled.span`
  margin: 0 0.8rem;
`;

export const DividerX = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;
