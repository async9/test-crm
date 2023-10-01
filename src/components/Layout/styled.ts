import styled, { css } from 'styled-components';

export const Content = styled.div<{ showSidebar: boolean }>`
  display: grid;
  grid-template-columns: 80px calc(100vw - 80px);
  transition: 0.3s ease-in;
  ${({ showSidebar }) =>
    showSidebar
      ? css`
          grid-template-columns: 280px calc(100vw - 280px);
        `
      : null}
`;
