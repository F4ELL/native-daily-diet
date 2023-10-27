import styled from 'styled-components/native';

type Props = {
  bgColor: string
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 132px;
  background-color: ${({ theme, bgColor }) => bgColor === "positive" ? theme.COLORS.GREEN_LIGHT : bgColor === "negative" ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_300};
  padding: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`
