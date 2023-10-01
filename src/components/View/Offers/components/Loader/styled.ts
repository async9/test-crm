import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spin = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: ${spin} 0.8s linear infinite;
`;
