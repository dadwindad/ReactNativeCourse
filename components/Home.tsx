import { FC } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux"; //query ข้อมูลจาก redux store

export const Home: FC = () => {
  const userInfo = useSelector((state: any) => state.user);

  return (
    <View>
      <Text>Home</Text>
      <Text>
        Welcome {userInfo.firstName} {userInfo.lastName}
      </Text>
      <Text>Age : {userInfo.age}</Text>
      <Text>Token : {userInfo.token}</Text>
    </View>
  );
};
