import styled, { css } from 'styled-components';

interface IFlex {
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  alignCenter?: boolean;
  alignStart?: boolean;
  flexStart?: boolean;
  flexEnd?: boolean;
  flex?: string;
  flexWrap?: boolean;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  full?: boolean;
}

export const Flex = styled.div<IFlex>`
    display: flex;
  
    ${({ flex }) =>
      flex &&
      css`
        flex: ${flex};
      `}
    ${({ flexWrap }) =>
      flexWrap &&
      css`
        flex-wrap: wrap;
      `}
    ${({ justifyBetween }) =>
      justifyBetween &&
      css`
        justify-content: space-between;
      `}
    ${({ justifyCenter }) =>
      justifyCenter &&
      css`
        justify-content: center;
      `}
    ${({ alignCenter }) =>
      alignCenter &&
      css`
        align-items: center;
      `}
    ${({ alignStart }) =>
      alignStart &&
      css`
        align-items: flex-start;
      `}
    ${({ flexStart }) =>
      flexStart &&
      css`
        justify-content: flex-start;
      `}
    ${({ flexEnd }) =>
      flexEnd &&
      css`
        justify-content: flex-end;
      `}
    ${({ direction }) =>
      direction &&
      css`
        flex-direction: ${direction};
      `}
  
    ${({ full }) =>
      full &&
      css`
        width: 100%;
        height: 100%;
        flex-basis: 100%;
      `}
  `;
