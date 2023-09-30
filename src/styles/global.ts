import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
