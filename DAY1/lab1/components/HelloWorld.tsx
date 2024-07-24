import { FC } from "react";
import { Text, View } from "react-native";

const name = "Hello World";
export const HelloWorld: FC = () => {
  let cnt = 0;

  return (
    <View>
      <Text className="text-blue-500">
        {name} {cnt}
      </Text>
    </View>
  );
};
