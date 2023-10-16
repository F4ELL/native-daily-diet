import styled from 'styled-components/native';
import theme from '../../theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.COLORS.GRAY_100};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.GRAY_700
}))``