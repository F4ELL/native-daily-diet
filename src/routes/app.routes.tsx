import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Statistics } from "../screens/Statistics";
import { Creation } from "../screens/Creation";
import { Feedback } from "../screens/Feedback";
import { Meal } from "../screens/Meal";
import { Edit } from "../screens/Edit";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="statistics"
        component={Statistics}
      />

      <Screen
        name="creation"
        component={Creation}
      />

      <Screen
        name="feedback"
        component={Feedback}
      />

      <Screen
        name="meal"
        component={Meal}
      />

      <Screen
        name="edit"
        component={Edit}
      />
    </Navigator>
  )
}