import styled, { css } from 'styled-components';

export const Content = styled.div<{ showSidebar: boolean }>`
  display: grid;
  grid-template-columns: 80px 1fr;
  transition: 0.3s ease-in;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ showSidebar }) =>
    showSidebar
      ? css`
          grid-template-columns: 280px 1fr;
        `
      : null}
`;
