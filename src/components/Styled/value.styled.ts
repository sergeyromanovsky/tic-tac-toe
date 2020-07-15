import styled from 'styled-components';
import { colors } from 'src/utils/colors';

export const StyledValue = styled.span<{ isX: boolean }>`
  font-size: 2rem;

  color: ${({ isX }) => (isX ? colors.text.dark : colors.text.pink)};
`;
