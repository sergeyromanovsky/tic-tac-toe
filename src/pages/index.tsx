import React, { useState, useCallback, useMemo } from 'react';
import Board from './Board';
import { Wrapper, StyledStatus } from './styled';
import { calculateWinner, calculateDraw } from 'src/utils';
import { StyledButton } from 'src/components/Styled/button.styled';

const initialCells = new Array(9).fill(null);
export type ICell = null | 'X' | 'O';

function Game() {
  const [xIsNext, setNext] = useState<boolean>(true);
  const [cells, setCells] = useState<ICell[]>(initialCells);

  const handleCellClick = useCallback(
    (index: number) => {
      if (calculateWinner(cells) || cells[index]) {
        return;
      }
      const updCells = [...cells];
      updCells[index] = xIsNext ? 'X' : 'O';

      setCells(updCells);
      setNext(!xIsNext);
    },
    [cells, setNext, xIsNext]
  );
  const winner = useMemo(() => calculateWinner(cells), [cells]);
  const isDraw = useMemo(() => calculateDraw(cells), [cells]);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = 'Draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }
  return (
    <Wrapper alignCenter justifyCenter direction='column'>
      <StyledStatus>{status}</StyledStatus>
      <Board cellClick={handleCellClick} cells={cells} />
      <StyledButton onClick={() => setCells(initialCells)}>
        New Game
      </StyledButton>
    </Wrapper>
  );
}

export default Game;
