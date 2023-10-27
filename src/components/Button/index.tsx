import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  title: string
  icon?: IconBoxProps
  variant?: "default" | "outline"
}

export function Button({ title, icon: Icon, variant = "default", ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container
      activeOpacity={0.7}
      variant={variant}
      {...rest}
    >
      {
        Icon &&
        <Icon
          size={18}
          color={variant === "default" ? COLORS.WHITE : COLORS.GRAY_700}
        />
      }

      <Title variant={variant}>
        {title}
      </Title>
    </Container>
  );
}