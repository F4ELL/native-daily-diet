import { mealsGetAll } from "./mealsGetAll"

export async function mealsGetById(id: string) {
  try {
    const storedMeals = await mealsGetAll()

    const meal = storedMeals.find(meal => meal.id === id)

    return meal

  } catch (error) {
    throw (error)
  }
}