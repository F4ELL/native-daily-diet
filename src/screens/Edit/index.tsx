import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MealTypeButton } from '../../components/MealTypeButton';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Container, Content, DateAndHour, InputsDate, Label, MealType } from './styles';
import { Meal } from '../Home';
import { useCallback, useState } from 'react';
import { mealsGetById } from '../../storage/meal/mealsGetById';
import { mealsUpdateById } from '../../storage/meal/mealsUpdateById';

type RouteParams = {
  id: string
}

export function Edit() {
  const [meal, setMeal] = useState<Meal | undefined>({} as Meal)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [hour, setHour] = useState("")
  const [mealType, setMealType] = useState("default")
  const { navigate } = useNavigation()

  const route = useRoute()
  const { id } = route.params as RouteParams

  function formatDate(mealDate: string) {
    const dataOriginal = new Date(mealDate);

    const dia = String(dataOriginal.getDate()).padStart(2, '0');
    const mes = String(dataOriginal.getMonth() + 1).padStart(2, '0');
    const ano = dataOriginal.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada
  }

  async function fetchMeal() {
    const data = await mealsGetById(id)

    setName(data!.name)
    setDescription(data!.description)
    setDate(formatDate(data!.date))
    setHour(data!.hour)
    setMealType(data!.type)
    setMeal(data)
  }

  function generateDate(date: string) {
    const [day, month, year] = date.split('/')

    const time = new Date(Number(year), Number(month) - 1, Number(day))

    return time
  }

  async function handleUpdate() {
    try {
      await mealsUpdateById(meal!.id, {
        name,
        description,
        date: generateDate(date).toISOString(),
        hour,
        type: mealType
      })

      navigate("meal", { id: meal!.id })
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeal()
  }, []))

  return (
    <Container>
      <Header
        variant='default'
        title='Editar refeição'
      />

      <Content>
        <Label>
          Nome
        </Label>

        <Input 
          value={name}
          onChangeText={setName}
        />

        <Label>
          Descrição
        </Label>

        <TextAreaInput 
          value={description}
          onChangeText={setDescription}
        />

        <DateAndHour>
          <InputsDate>
            <Label>
              Data
            </Label>

            <Input
              value={date}
              onChangeText={setDate}
              style={{ flex: 1 }}
            />
          </InputsDate>


          <InputsDate>
            <Label>
              Hora
            </Label>

            <Input
              value={hour}
              onChangeText={setHour}
              style={{ flex: 1 }}
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
            variant={mealType === "positive" ? "positive" : "default"}
            onPress={() => setMealType("positive")}
          />

          <MealTypeButton
            title='Não'
            status='negative'
            variant={mealType === "negative" ? "negative" : "default"}
            onPress={() => setMealType("negative")}
          />
        </MealType>

        <Button
          title='Salvar alterações'
          style={{ marginTop: "auto" }}
          onPress={handleUpdate}
        />
      </Content>
    </Container>
  );
}