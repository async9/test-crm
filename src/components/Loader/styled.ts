import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spin = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.borderLight};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  animation: ${spin} 0.8s linear infinite;
`;
