import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Separator, Status, Time } from './styles';

import { Meal } from '../../screens/Home';

type Props = TouchableOpacityProps & {
  data: Meal
}

export function MealCard({ data, ...rest }: Props) {
  return (
    <Container
      {...rest}
    >
      <Time>
        {data.hour}
      </Time>

      <Separator />

      <Title>
        {data.name}
      </Title>

      <Status 
        variant={data.type}
      />
    </Container>
  );
}