import { css } from 'styled-components';

export const label = css`
  font-weight: 700;
  width: max-content;
  border-radius: 0 4px 4px 0;
  padding: 0.5rem 1.2rem;
  color: ${({ theme }) => theme.bgColors.primary};
  background-color: ${({ theme }) => theme.colors.greyLight};
`;
