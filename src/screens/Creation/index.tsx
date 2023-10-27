import { useNavigation } from '@react-navigation/native';
import { Container, Content, DateAndHour, Label, InputsDate, MealType } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MealTypeButton } from '../../components/MealTypeButton';
import { TextAreaInput } from '../../components/TextAreaInput';
import { useState } from 'react';
import { mealsCreate } from '../../storage/meal/mealsCreate';

export function Creation() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [mealType, setMealType] = useState("default")

  const { navigate } = useNavigation()

  function generateDate(date: string) {
    const [day, month, year] = date.split('/')

    const time = new Date(Number(year), Number(month) - 1, Number(day))

    return time
  }

  async function handleNewMeal() {
    try {
      await mealsCreate({
        name,
        description,
        date: generateDate(date).toISOString(),
        hour,
        type: mealType
      })

      navigate("feedback", { status: mealType })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Header
        variant='default'
        title='Nova refeição'
      />

      <Content>
        <Label>
          Nome
        </Label>

        <Input
          onChangeText={setName}
        />

        <Label>
          Descrição
        </Label>
        <TextAreaInput
          onChangeText={setDescription}
        />

        <DateAndHour>
          <InputsDate>
            <Label>
              Data
            </Label>

            <Input
              style={{ flex: 1 }}
              onChangeText={setDate}
            />
          </InputsDate>


          <InputsDate>
            <Label>
              Hora
            </Label>

            <Input
              style={{ flex: 1 }}
              onChangeText={setHour}
            />
          </InputsDate>
        </DateAndHour>

        <Label>
          Está dentro da dieta?
        </Label>

        <MealType>
          <MealTypeButton
            title='Sim'
            status='positive'
            variant={mealType === "positive" ? mealType : "default"}
            onPress={() => setMealType("positive")}
          />

          <MealTypeButton
            title='Não'
            status='negative'
            variant={mealType === "negative" ? mealType : "default"}
            onPress={() => setMealType("negative")}
          />
        </MealType>

        <Button
          title='Cadastrar refeição'
          style={{ marginTop: "auto" }}
          onPress={handleNewMeal}
        />
      </Content>
    </Container>
  );
}