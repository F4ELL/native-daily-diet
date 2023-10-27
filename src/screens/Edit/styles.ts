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

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  margin-bottom: 4px;
`

export const DateAndHour = styled.View`
  flex-direction: row;
  gap: 20px;

  margin-bottom: 24px;
`

export const InputsDate = styled.View`
  flex: 1;
`

export const MealType = styled.View`
  flex-direction: row;
  gap: 12px;
`