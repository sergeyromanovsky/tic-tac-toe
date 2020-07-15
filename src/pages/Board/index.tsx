import React from 'react';
import Cell from 'src/components/Cell';
import { StyledWrapper } from './styled';
import { ICell } from '..';

interface IProps {
  cells: ICell[];
  cellClick: (index: number) => void;
}
function Board({ cells, cellClick }: IProps) {
  return (
    <StyledWrapper>
      {cells.map((c, i) => (
        <Cell key={i} index={i} value={cells[i]} click={cellClick} />
      ))}
    </StyledWrapper>
  );
}

export default Board;
