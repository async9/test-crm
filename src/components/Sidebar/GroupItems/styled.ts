import styled from 'styled-components';
import { label } from '@/styles/mixins';
import { bodyM, bodyS } from '@/styles/typography';

export const Root = styled.div`
  /* padding: 0 1.2rem 0 1.8rem; */
  margin-bottom: 2rem;
`;

export const Label = styled.div`
  ${bodyS}
  ${label}
`;

export const Icon = styled.div`
  svg {
    path {
      fill: #fff;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const TriggerText = styled.div`
  ${bodyM}
  font-weight: 500;
`;
