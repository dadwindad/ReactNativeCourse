import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { HelloWorld } from "./components/HelloWorld";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <HelloWorld />
      <Text className="text-red-500">Styling just works! 🎉</Text>
    </View>
  );
}
