import { Container, Picture } from './styles';

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import LogoSvg from '../../assets/logo.svg'

export function HomeHeader() {
  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 24

  return (
    <Container style={{ paddingTop }}>
      <LogoSvg />

      <Picture 
        source={{ uri: "https://github.com/F4ELL.png" }}
      />
    </Container>
  );
}