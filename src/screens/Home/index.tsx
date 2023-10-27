import { useCallback, useEffect, useState } from "react";
import { ScrollView, SectionList, View } from "react-native";
import { Container, Content, DayList, Label } from "./styles";

import { Plus } from 'phosphor-react-native'

import { mealsGetAll } from "../../storage/meal/mealsGetAll";

import { HomeHeader } from "../../components/HomeHeader";
import { Percent } from "../../components/Percent";
import { Button } from "../../components/Button";
import { MealCard } from "../../components/MealCard";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR'

export type Meal = {
  id: string
  name: string
  description: string
  date: string
  hour: string
  type: string
}

type Meals = {
  title: string
  data: Meal[]
}

export function Home() {
  const [meals, setMeals] = useState<Meals[]>([])
  const [percent, setPercent] = useState(0)

  const { navigate } = useNavigation()

  async function fetchMeals() {
    try {
      const data = await mealsGetAll()
      const formatedDate = formatMeals(data)

      setMeals(formatedDate)
    } catch (error) {
      console.log(error)
    }
  }

  function sortDate(a: string, b: string) {
    const dataA = new Date(a.split('.').reverse().join('.'));
    const dataB = new Date(b.split('.').reverse().join('.'));

    if (dataA > dataB) return -1;
    if (dataA < dataB) return 1;
    return 0;
  }

  function formatMeals(data: Meal[]) {
    let days: string[] = []

    data.forEach(meal => {
      const formatedDate = format(new Date(meal.date), "dd.MM.yy")

      if (!days.includes(formatedDate)) {
        days.push(formatedDate)
      }
    })

    days.sort(sortDate);

    const mealsByDay = days.map(day => {
      const meals = data.filter(meal => format(new Date(meal.date), "dd.MM.yy") === day)

      return ({ title: day, data: meals })
    })

    return mealsByDay
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

  useFocusEffect(useCallback(() => {
    fetchMeals()
    percentScore()
  }, []))

  return (
    <Container>
      <HomeHeader />

      <Content>
        <Percent
          variant={percent >= 50 ? "positive" : "negative"}
          title={`${percent.toFixed(2).replace(".", ",")}`}
          subtitle="das refeições dentro da dieta"
        />

        <Label>
          Refeições
        </Label>

        <Button
          title="Nova refeição"
          icon={Plus}
          onPress={() => navigate("creation")}
        />

        <SectionList
          sections={meals}
          keyExtractor={meal => meal.description}
          renderItem={meal => (
            <MealCard
              data={meal.item}
              onPress={() => navigate("meal", { id: meal.item.id })}
            />
          )}
          renderSectionHeader={({ section }) => (
            <DayList>
              {section.title}
            </DayList>
          )}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 24 }}
        />
      </Content>
    </Container>
  )
}