import { TouchableOpacityProps } from 'react-native';
import { Container, Description, Separator, Status, Time } from './styles';

type Props = TouchableOpacityProps & {
  time: string
  description: string
  status: string
}

export function MealCard({ time, description, status, ...rest }: Props) {
  return (
    <Container
      {...rest}
    >
      <Time>
        {time}
      </Time>

      <Separator />

      <Description>
        {description}
      </Description>

      <Status 
        variant={status}
      />
    </Container>
  );
}