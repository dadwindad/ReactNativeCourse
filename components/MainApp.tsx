import { FC } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icon
import AntDesign from "@expo/vector-icons/AntDesign";

//component
import { Message } from "./Message";
import { Menu } from "./Menu";
import { Setting } from "./Setting";
import { Home } from "./Home";

const ButtomTab = createBottomTabNavigator();

export const MainApp: FC = () => {
  return (
    <>
      <ButtomTab.Navigator
        screenOptions={{
          tabBarStyle: { paddingBottom: 10, height: 60, paddingTop: 10 },
        }}
      >
        <ButtomTab.Screen
          name="Home"
          component={Home}
          options={{
            title: "หน้าหลัก",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          }}
        />
        <ButtomTab.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "เมนู",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="appstore-o" color={color} size={size} />
            ),
          }}
        />
        <ButtomTab.Screen
          name="Message"
          component={Message}
          options={{
            title: "ข้อควม",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" color={color} size={size} />
            ),
          }}
        />
        <ButtomTab.Screen
          name="Setting"
          component={Setting}
          options={{
            title: "ตั้งค่า",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
          }}
        />
      </ButtomTab.Navigator>
    </>
  );
};
