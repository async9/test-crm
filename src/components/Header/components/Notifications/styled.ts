import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  padding: 1.8rem;
  min-height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

export const BodyContainer = styled.div`
  margin-left: 1.2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Card = styled.div`
  margin-top: 2rem;
  &:first-child {
    margin-top: 0;
  }
`;

export const BodyCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
  margin: 1.6rem 0 1.6rem 1.6rem;
  transition: 0.3s linear;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.textDark};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
