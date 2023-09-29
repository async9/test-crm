import { css } from 'styled-components';

const color = css`
  color: ${({ theme }) => theme.colors.white};
`;

export const bodyXXS = css`
  ${color};
  font-size: 1rem;
`;

export const bodyXS = css`
  ${color};
  font-size: 1.2rem;
`;

export const bodyS = css`
  ${color};
  font-size: 1.4rem;
`;
