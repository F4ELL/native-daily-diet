import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 24px;
`

type Props = {
  variant: string
}

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, variant }) => variant === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

  margin-bottom: 8px;
`

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 40px;
`

export const SubtitleHighlight = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Image = styled.Image`
  margin-bottom: 32px;
`

