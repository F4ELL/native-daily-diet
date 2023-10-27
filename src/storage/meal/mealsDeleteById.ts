import AsyncStorage from "@react-native-async-storage/async-storage"
import { mealsGetAll } from "./mealsGetAll"
import { MEAL_COLLECTION } from "../storageConfig"

export async function mealsDeleteById(id: string) {
  try {
    const storedMeals = await mealsGetAll()

    const filteredList = storedMeals.filter(meal => meal.id !== id)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredList))

  } catch (error) {
    throw (error)
  }
}