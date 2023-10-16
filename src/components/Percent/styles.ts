import styled from 'styled-components/native';

type Props = {
  bgColor: "positive" | "negative"
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 16px 20px;
  background-color: ${({ theme, bgColor }) => bgColor === "positive" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 2px;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const OpenButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`

