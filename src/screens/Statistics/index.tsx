import { StatisticsHeader } from '../../components/StatisticsHeader';
import { Container, Content, Label, Record, Sequence, SequenceCard, Subtitle, Title } from './styles';

export function Statistics() {
  return (
    <Container>
      <StatisticsHeader
        title='90,86'
        subtitle='das refeições dentro da dieta'
      />

      <Content>
        <Label>
          Estatísticas gerais
        </Label>

        <Record>
          <Title>
            22
          </Title>

          <Subtitle>
            melhor sequência de pratos dentro da dieta
          </Subtitle>
        </Record>

        <Record>
          <Title>
            109
          </Title>

          <Subtitle>
            refeições registradas
          </Subtitle>
        </Record>

        <Sequence>
          <SequenceCard 
            variant='positive'
          >
            <Title>
              99
            </Title>
            <Subtitle>
              refeições dentro da dieta
            </Subtitle>
          </SequenceCard>
          <SequenceCard 
            variant='negative'
          >
            <Title>
              10
            </Title>
            <Subtitle>
              refeições fora da dieta
            </Subtitle>
          </SequenceCard>
        </Sequence>


      </Content>
    </Container>
  );
}