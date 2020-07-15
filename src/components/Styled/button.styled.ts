import styled from 'styled-components';
import { colors } from 'src/utils/colors';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  color: #fff;
  font-weight: 500;
  padding: 1.75rem 3rem;
  border-radius: 1.25rem;
  cursor: pointer;
  outline: none;
  border: none;
  transition: 0.3s;

  background-color: ${colors.bg.dark};
  &:hover {
    background-color: ${colors.bg.lightDark};
  }
`;
