import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import CreateTrip from "./src/pages/CreateTrip";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home | andamento" }}
          />
          <Stack.Screen
            name="CreateList"
            component={CreateTrip}
            options={{ title: "Create trip | andamento" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
