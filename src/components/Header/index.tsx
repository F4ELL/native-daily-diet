import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { BackButton, Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  variant: "default" | "positive" | "negative"
  title: string
}

export function Header({ variant, title }: Props) {
  const { COLORS } = useTheme()
  const { goBack } = useNavigation()

  const insets = useSafeAreaInsets()

  const paddingTop = insets.top + 24

  const iconColor = variant === "positive" ? COLORS.GREEN_DARK : variant === "negative" ? COLORS.RED_DARK : COLORS.GRAY_600

  return (
    <Container
      style={{ paddingTop }}
      bgColor={variant}
    >
      <BackButton
        activeOpacity={0.7}
        style={{ top: paddingTop + 12 }}
        onPress={() => goBack()}
      >
        <ArrowLeft size={24} color={iconColor} />
      </BackButton>

      <Title>
        {title}
      </Title>
    </Container>
  );
}