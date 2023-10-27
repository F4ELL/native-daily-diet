import { TouchableOpacityProps } from 'react-native';
import { Container, Status, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string
  status: string
  variant?: string
}

export function MealTypeButton({ title, status, variant = "default", ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      variant={variant}
      {...rest}
    >
      <Status 
        status={status}
      />

      <Title>
        {title}
      </Title>
    </Container>
  );
}