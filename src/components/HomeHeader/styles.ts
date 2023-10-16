import { Image } from 'expo-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Picture = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`