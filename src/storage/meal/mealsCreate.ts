import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "../storageConfig"
import { mealsGetAll } from "./mealsGetAll"

export type MealProps = {
  name: string
  description: string
  date: string,
  hour: string
  type: string
}

export async function mealsCreate(newMeal: MealProps) {
  try {
    const storedMeals = await mealsGetAll()

    const storage = JSON.stringify([...storedMeals, {
      id: new Date().toISOString(),
      ...newMeal
    }])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}