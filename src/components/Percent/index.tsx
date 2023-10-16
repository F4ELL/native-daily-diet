import { ArrowUpRight } from 'phosphor-react-native';

import theme from '../../theme';

import { useNavigation } from '@react-navigation/native';

import { Container, OpenButton, Subtitle, Title } from './styles';

type Props = {
  variant?: "positive" | "negative",
  title: string,
  subtitle: string
}

export function Percent({ variant = "positive", title, subtitle }: Props) {
  const { navigate } = useNavigation()

  return (
    <Container
      bgColor={variant}
    >
      <Title>
        {title}%
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>

      <OpenButton
        activeOpacity={0.7}
        onPress={() => navigate("statistics")}
      >
        <ArrowUpRight size={24} color={variant === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
      </OpenButton>
    </Container>
  );
}