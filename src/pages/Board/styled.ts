import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 60vw;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 20vh);
  justify-items: center;
  align-items: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
  margin-bottom: 3rem;

  & > div {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
`;
