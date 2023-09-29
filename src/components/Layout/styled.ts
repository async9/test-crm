import styled from 'styled-components';

export const Overlay = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

export const Content = styled.main`
  position: relative;
  z-index: 2;
`;
