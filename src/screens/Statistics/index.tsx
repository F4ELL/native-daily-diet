import { useCallback, useState } from 'react';
import { StatisticsHeader } from '../../components/StatisticsHeader';
import { Container, Content, Label, Record, Sequence, SequenceCard, Subtitle, Title } from './styles';
import { mealsGetAll } from '../../storage/meal/mealsGetAll';
import { useFocusEffect } from '@react-navigation/native';
import { Meal } from '../Home';

export function Statistics() {
  const [meals, setMeals] = useState<Meal[] | undefined>([])
  const [percent, setPercent] = useState(0)
  const [sequence, setSequence] = useState<Meal[]>([])

  async function fetchMeals() {
    try {
      const data = await mealsGetAll()

      setMeals(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function percentScore() {
    try {
      const data = await mealsGetAll()

      let valuesPositives = 0

      data.forEach(meal => {
        if (meal.type === "positive") {
          valuesPositives++
        }
      })

      const currentPercent = (valuesPositives * 100) / data.length
      setPercent(currentPercent)

    } catch (error) {
      console.log(error)
    }
  }

  const amounts = meals?.reduce((acc, current) => {
    if (current.type === "positive") {
      acc.positives++
    } else {
      acc.negatives++
    }

    return acc
  }, {
    positives: 0,
    negatives: 0
  })

  async function calculeBestSequence() {
    try {
      const data = await mealsGetAll()

      let bestSequence: Meal[] = []
      let currentSequence: Meal[] = []

      data.forEach(meal => {
        if (meal.type === "positive") {
          currentSequence.push(meal)
        } else {
          if (currentSequence.length > bestSequence.length) {
            bestSequence = [...currentSequence]
          }
          currentSequence = []
        }

        if (currentSequence.length > bestSequence.length) {
          bestSequence = [...currentSequence]
        }
      })

      setSequence(bestSequence)

    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
    percentScore()
    calculeBestSequence()
  }, []))

  return (
    <Container>
      <StatisticsHeader
        title={`${percent.toFixed(2).replace(".", ",")}`}
        subtitle='das refeições dentro da dieta'
        variant={percent >= 50 ? "positive" : "negative"}
      />

      <Content>
        <Label>
          Estatísticas gerais
        </Label>

        <Record>
          <Title>
            {sequence.length}
          </Title>

          <Subtitle>
            melhor sequência de pratos dentro da dieta
          </Subtitle>
        </Record>

        <Record>
          <Title>
            {meals?.length}
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
              {amounts?.positives}
            </Title>
            <Subtitle>
              refeições dentro da dieta
            </Subtitle>
          </SequenceCard>
          <SequenceCard
            variant='negative'
          >
            <Title>
              {amounts?.negatives}
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