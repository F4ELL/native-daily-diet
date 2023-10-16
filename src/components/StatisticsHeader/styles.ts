import { Image } from 'expo-image';
import styled from 'styled-components/native';

type Props = {
  bgColor: "positive" | "negative"
}

export const Container = styled.View<Props>`
  width: 100%;
  height: 200px;
  background-color: ${({ theme, bgColor }) => bgColor === "positive" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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