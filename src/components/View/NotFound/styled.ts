import styled from 'styled-components';
import bgImage from '@/assets/images/bg.webp';

export const Root = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${bgImage}) center / cover no-repeat;
`;

export const Title = styled.div`
  font-size: 5.6rem;
  font-weight: 700;
`;
