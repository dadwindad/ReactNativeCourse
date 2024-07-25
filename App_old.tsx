import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   {/* <Text className="text-red-500">Styling just works! 🎉</Text> */}

    //   <Login />
    // </View>
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
          options={{
            title: "ลงทะเบียน",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
