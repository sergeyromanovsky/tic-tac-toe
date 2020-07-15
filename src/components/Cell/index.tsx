import React from 'react';
import { StyledCell } from './styled';
import { ICell } from 'src/pages';
import { StyledValue } from '../Styled/value.styled';

interface IProps {
  value: ICell;
  click: (index: number) => void;
  index: number;
}
function Cell({ value, click, index }: IProps) {
  return (
    <StyledCell alignCenter justifyCenter onClick={() => click(index)}>
      <StyledValue isX={value === 'X'}>{value}</StyledValue>
    </StyledCell>
  );
}

export default Cell;
