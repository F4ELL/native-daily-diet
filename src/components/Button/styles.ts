import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  max-height: 50px;
  min-height: 50px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`