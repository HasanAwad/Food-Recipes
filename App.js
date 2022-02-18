import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import Theme from "./src/Theme";
// import { ThemeProvider } from "styled-components";
import Tabs from "./navigation/Tabs";
import Login from "./src/screens/Login";
import Recipe from "./src/screens/Recipe";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <ThemeProvider theme={Theme}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />

        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
    // </ThemeProvider>
  );
}
