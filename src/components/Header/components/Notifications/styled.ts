import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 6px;
  background-color: #111;
`;

export const Top = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;
