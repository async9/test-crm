import styled, { css, keyframes } from 'styled-components';
import { label } from '@/styles/mixins';
import { bodyM, bodyS } from '@/styles/typography';
import { BREAKPOINTS } from '@/constants';
import * as Accordion from '@radix-ui/react-accordion';

const slideDown = keyframes`
  from { max-height: 0; opacity: 0; }
  to { max-height: 800px; opacity: 1; }  
`;

const slideUp = keyframes`
  from { max-height: 800px; opacity: 1; } 
  to { max-height: 0; opacity: 0; }
`;

export const AccordionContent = styled(Accordion.Content)`
  overflow: hidden;
  margin: 0 0 1.2rem 1.2rem;
  padding-left: 1rem;
  border-left: 1px solid #e0e1e6;

  &[data-state='open'] {
    animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }

  &[data-state='closed'] {
    animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
`;

export const Label = styled.div`
  ${bodyS}
  ${label}
`;

export const Icon = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.colors.white};
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

export const TriggerText = styled.div<{
  $showSidebarMenu: boolean;
}>`
  min-width: max-content;
  ${bodyM}
  font-weight: 500;
  margin-left: 1rem;
  opacity: 0;
  transition: all 0.3s ease-in;
  color: ${({ theme }) => theme.colors.white};
  ${({ $showSidebarMenu }) =>
    $showSidebarMenu
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
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const LinkItem = styled.a`
  ${bodyM}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textGrey};
  @media (${BREAKPOINTS.S}) {
    transition: 0.3s linear;
  }
`;
