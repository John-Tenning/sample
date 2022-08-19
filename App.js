import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import Forms from "./screens/Forms";
import TimerScreen from "./screens/TimerScreen";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;