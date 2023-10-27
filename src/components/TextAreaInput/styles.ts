import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 100%;
  height: 120px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
  padding: 14px;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  margin-bottom: 24px;
`