import styled from 'styled-components';
import { BREAKPOINTS } from '@/constants';
import { bodyM } from '@/styles/typography';

export const Root = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDark};
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
`;

export const DateText = styled.span`
  ${bodyM}
  font-weight: 600;
  margin-left: 1rem;
`;

export const CardBody = styled.div`
  margin-left: 1.2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 2.6rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  column-gap: 1.6rem;
  border-radius: 6px;
  margin-left: 1.2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.textDark};
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s ease-in;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const LoaderPosition = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateY(-50%);
`;
