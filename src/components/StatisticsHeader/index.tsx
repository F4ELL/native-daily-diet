import { BackButton, Container, Subtitle, Title } from './styles';

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string
  subtitle: string
}

export function StatisticsHeader({ title, subtitle }: Props) {
  const { COLORS } = useTheme()
  const { goBack } = useNavigation()

  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 24

  return (
    <Container 
      style={{ paddingTop }}
      bgColor="positive"
    >
      <BackButton 
        style={{ top: paddingTop }}
        onPress={() => goBack()}
      >
        <ArrowLeft 
          size={24}
          color={COLORS.GREEN_DARK}
        />
      </BackButton>

      <Title>
        {title}%
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}