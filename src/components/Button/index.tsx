import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';
import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = TouchableOpacityProps & {
  title: string
  icon?: IconBoxProps
}

export function Button({ title, icon: Icon, ...rest }: Props) {
  const { COLORS } = useTheme()

  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >
      {
        Icon &&
        <Icon
          size={18}
          color={COLORS.WHITE}
        />
      }

      <Title>
        {title}
      </Title>
    </Container>
  );
}