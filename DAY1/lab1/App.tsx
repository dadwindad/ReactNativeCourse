import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Login } from "./components/Login";

export default function App() {
  return (
    <View>
      {/* <Text className="text-red-500">Styling just works! 🎉</Text> */}

      <Login />
    </View>
  );
}
