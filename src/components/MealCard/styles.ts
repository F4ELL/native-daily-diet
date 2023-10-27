import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Time = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Separator = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Title = styled.Text`
  flex: 1;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`

type Props = {
  variant: string
}

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  background-color: ${({ theme, variant }) => variant === "positive" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  `