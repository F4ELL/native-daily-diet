import AsyncStorage from "@react-native-async-storage/async-storage"
import { mealsGetAll } from "./mealsGetAll"
import { MEAL_COLLECTION } from "../storageConfig"
import { MealProps } from "./mealsCreate"

export async function mealsUpdateById(id: string, data: MealProps) {
  try {
    const storedMeals = await mealsGetAll()

    const mealIndex = storedMeals.findIndex(meal => meal.id === id)

    storedMeals[mealIndex] = {
      id,
      name: data.name,
      description: data.description,
      date: data.date,
      hour: data.hour,
      type: data.type
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storedMeals))

  } catch (error) {
    throw (error)
  }
}