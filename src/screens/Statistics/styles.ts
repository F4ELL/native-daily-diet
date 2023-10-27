import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px 20px 0 0;
  padding: 0 24px;

  margin-top: -32px;
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-self: center;
  margin-top: 32px;
  margin-bottom: 24px;
`

export const Record = styled.View`
  width: 100%;
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  justify-content: center;
  align-items: center;

  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Sequence = styled.View`  
  flex-direction: row;
  gap: 12px;
`

type Props = {
  variant: "positive" | "negative"
}

export const SequenceCard = styled.View<Props>`
  height: 107px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variant }) => variant === "positive" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  padding: 16px;
`