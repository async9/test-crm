import { css } from 'styled-components';

export const label = css`
  text-transform: uppercase;
  font-weight: 700;
  width: max-content;
  border-radius: 0 4px 4px 0;
  padding: 0.5rem 1.2rem;
  color: #111;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const scrollbar = css`
  &::-webkit-scrollbar {
    appearance: none;
    &:hover {
      cursor: pointer;
    }
    &:vertical {
      width: 4px;
    }
    &:horizontal {
      height: 4px;
    }
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
