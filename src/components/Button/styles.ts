import styled from 'styled-components/native';

type Props = {
  variant: string
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 50px;
  max-height: 50px;
  min-height: 50px;
  padding: 16px 24px;
  background-color: ${({ theme, variant }) => variant === "default" ? theme.COLORS.GRAY_600 : "transparent"};
  border-radius: 6px;
  border: 1px solid ${({ theme, variant }) => variant === "default" ? "transparent" : theme.COLORS.GRAY_700};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, variant }) => variant === "default" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`