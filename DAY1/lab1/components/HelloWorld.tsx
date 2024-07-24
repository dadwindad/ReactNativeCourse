import { FC } from "react";
import { Button, Text, View } from "react-native";

const name = "Hello World";
export const HelloWorld: FC = () => {
  let cnt = 0;

  return (
    <View className="w-full h-full items-center">
      <View className="m-auto">
        <Text className="text-blue-500">
          {name} {cnt}
        </Text>
        <Button title="Add" />
      </View>
    </View>
  );
};
