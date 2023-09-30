import styled, { css } from 'styled-components';

export const Content = styled.div<{ showSidebar: boolean; token: string }>`
  transition: 0.3s ease-in;
  ${({ token }) =>
    token
      ? css`
          display: grid;
          grid-template-columns: 80px 1fr;
        `
      : css`
          display: flex;
        `}
  ${({ showSidebar }) =>
    showSidebar
      ? css`
          display: grid;
          grid-template-columns: 280px 1fr;
        `
      : null}
`;
