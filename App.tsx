import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { MainApp } from "./components/MainApp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
