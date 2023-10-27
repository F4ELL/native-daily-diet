import { Header } from '../../components/Header';
import { Container, Content, Description, Label, ModalActions, ModalContent, ModalTitle, Status, Tag, TagTitle, Title } from './styles';
import { Button } from '../../components/Button';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Meal as MealType } from '../Home';
import { useCallback, useState } from 'react';
import { mealsGetById } from '../../storage/meal/mealsGetById';
import Modal from 'react-native-modal';
import { mealsDeleteById } from '../../storage/meal/mealsDeleteById';

type RouteParams = {
  id: string
}

export function Meal() {
  const [meal, setMeal] = useState<MealType | undefined>({} as MealType)
  const [isOpen, setIsOpen] = useState(false)
  const { navigate } = useNavigation()

  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchMeal() {
    try {
      const data = await mealsGetById(id)

      setMeal(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete() {
    try {
      await mealsDeleteById(meal!.id)

      setIsOpen(false)
      navigate("home")

    } catch (error) {
      console.log(error)
    }
  }

  function formatDate(mealDate: string) {
    const dataOriginal = new Date(mealDate);

    const dia = String(dataOriginal.getDate()).padStart(2, '0');
    const mes = String(dataOriginal.getMonth() + 1).padStart(2, '0');
    const ano = dataOriginal.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada
  }

  const formatedDate = formatDate(meal!.date)

  useFocusEffect(useCallback(() => {
    fetchMeal()
  }, []))

  return (
    <Container>
      <Header
        variant={meal!.type === "positive" ? "positive" : "negative"}
        title='Refeição'
      />

      <Modal
        isVisible={isOpen}
        hasBackdrop
        backdropColor='black'
        backdropOpacity={0.25}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <ModalContent>
          <ModalTitle>
            Deseja realmente excluir o registro da refeição?
          </ModalTitle>

          <ModalActions>
            <Button
              title='Cancelar'
              variant='outline'
              style={{ maxWidth: 135 }}
              onPress={() => setIsOpen(false)}
            />
            <Button
              title='Sim, excluir'
              style={{ maxWidth: 135 }}
              onPress={handleDelete}
            />
          </ModalActions>
        </ModalContent>
      </Modal>

      <Content>
        <Title>
          {meal?.name}
        </Title>

        <Description>
          {meal?.description}
        </Description>

        <Label>
          Data e hora
        </Label>

        <Description>
          {formatedDate} às {meal?.hour}
        </Description>

        <Tag>
          <Status
            status={meal!.type}
          />

          <TagTitle>
            {meal?.type === "positive" ? "dentro da dieta" : "fora da dieta"}
          </TagTitle>
        </Tag>

        <Button
          title='Editar Refeição'
          icon={PencilSimpleLine}
          style={{ marginTop: "auto", marginBottom: 8 }}
          onPress={() => navigate("edit", { id: meal!.id })}
        />

        <Button
          title='Excluir refeição'
          icon={Trash}
          variant='outline'
          onPress={() => setIsOpen(true)}
        />
      </Content>
    </Container>
  );
}