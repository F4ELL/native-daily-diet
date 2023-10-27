import styled from 'styled-components/native';

type ContainerProps = {
  variant: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  height: 48px;
  min-height: 48px;
  max-height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
  background-color: ${({ theme, variant }) => variant === "positive" ? theme.COLORS.GREEN_LIGHT : variant === "negative" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
  border: 1px solid ${({ theme, variant }) => variant === "positive" ? theme.COLORS.GREEN_DARK : variant === "negative" ? theme.COLORS.RED_DARK : "transparent"};
  border-radius: 6px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

type StatusProps = {
  status: string
}

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, status }) => status === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`