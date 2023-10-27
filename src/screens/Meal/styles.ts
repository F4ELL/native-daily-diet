import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px 20px 0 0;
  padding: 40px 24px;

  margin-top: -16px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XLG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 8px;
`

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-bottom: 24px;
`

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 8px;
`

export const Tag = styled.View`
  max-width: 144px;
  padding: 8px 16px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

type Props = {
  status: string
}

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, status }) => status === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const TagTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 2px;
`

export const ModalContent = styled.View`
  width: 327px;
  height: 192px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: center;
  padding: 40px 22px 24px;
  border-radius: 8px;
`

export const ModalTitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-bottom: 32px;
`

export const ModalActions = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`