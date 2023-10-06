import styled from 'styled-components';
import bgImage from '@/assets/images/bg.webp';

export const Root = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100wh;
  padding: 20rem 0;
  background: url(${bgImage}) center / cover no-repeat;
`;
