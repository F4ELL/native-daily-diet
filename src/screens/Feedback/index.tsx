import { Container, Content, Image, Subtitle, SubtitleHighlight, Title } from './styles';

import feedbackPosImg from '../../assets/feedbackpos.png'
import feedbackNegImg from '../../assets/feedbackneg.png'

import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

type RouteParams = {
  status: string
}

export function Feedback() {
  const { navigate } = useNavigation()

  const route = useRoute()
  const { status } = route.params as RouteParams

  return (
    <Container>
      <Content>
        <Title
          variant={status}
        >
          {status === "positive" ? "Continue assim!" : "Que pena!"}
        </Title>


        {
          status === "positive" 
            ? 
            <Subtitle>
              Você continua <SubtitleHighlight>dentro da dieta</SubtitleHighlight>. Muito bem!
            </Subtitle>
            :
            <Subtitle>
              Você <SubtitleHighlight>saiu da dieta</SubtitleHighlight> dessa vez, mas continue se esforçando e não desista!
            </Subtitle>
        }

        <Image
          source={status === "positive" ? feedbackPosImg : feedbackNegImg}
          alt=''
        />

        <Button
          title='Ir para a página inicial'
          style={{ maxWidth: 191 }}
          onPress={() => navigate("home")}
        />
      </Content>
    </Container>
  );
}