import styled, { css } from 'styled-components';
import { label } from '@/styles/mixins';
import { bodyM, bodyS } from '@/styles/typography';
import { BREAKPOINTS } from '@/constants';

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

export const TriggerText = styled.div<{ showSidebar: boolean }>`
  min-width: max-content;
  ${bodyM}
  font-weight: 500;
  margin-left: 1rem;
  opacity: 0;
  transition: all 0.3s ease-in;
  ${({ showSidebar }) =>
    showSidebar
      ? css`
          opacity: 1;
        `
      : null}
`;

export const ListItem = styled.li`
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkItem = styled.a`
  ${bodyM}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greyLight};
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
