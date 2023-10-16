import { useState } from "react";
import { Container, Content, DayList, Label } from "./styles";

import { Plus } from 'phosphor-react-native'

import { HomeHeader } from "../../components/HomeHeader";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { MealCard } from "../../components/MealCard";
import { SectionList } from "react-native";

export function Home() {
  const [meals, setMeals] = useState([
    {
      title: "12.08.22",
      data: [
        {
          time: "20:00",
          description: "Whey protein com leite",
          status: "positive"
        },
        {
          time: "17:00",
          description: "X-tudo",
          status: "negative"
        }
      ]
    },
    {
      title: "15.08.22",
      data: [
        {
          time: "12:00",
          description: "Vitamina de banana",
          status: "positive"
        },
        {
          time: "17:00",
          description: "Hot dog",
          status: "negative"
        }
      ]
    }
  ])

  return (
    <Container>
      <HomeHeader />

      <Content>
        <Percent
          variant="negative"
          title="90.86"
          subtitle="das refeições dentro da dieta"
        />

        <Label>
          Refeições
        </Label>

        <Button
          title="Nova refeição"
          icon={Plus}
        />

        <SectionList
          sections={meals}
          keyExtractor={meal => meal.description}
          renderItem={meal => (
            <MealCard
              time={meal.item.time}
              description={meal.item.description}
              status={meal.item.status}
            />
          )}
          renderSectionHeader={({ section }) => (
            <DayList>
              {section.title}
            </DayList>
          )}
        />
      </Content>
    </Container>
  )
}