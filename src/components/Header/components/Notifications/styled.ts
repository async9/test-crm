import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  background-color: #111;
  padding: 1.8rem;
  min-height: 50px;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const BodyContainer = styled.div`
  margin-left: 1.2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const BodyCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 2rem;
  margin: 1.6rem 0 1.6rem 1.6rem;
  transition: 0.3s linear;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.greyDark};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BodyHead = styled.div`
  padding: 1.8rem;
  min-height: 50px;
  border-left: 1px solid ${({ theme }) => theme.colors.grey};
`;
