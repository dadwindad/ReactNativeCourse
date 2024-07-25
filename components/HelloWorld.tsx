import { FC, useState } from "react";
import { Button, Text, View } from "react-native";

const name = "Hello World";
export const HelloWorld: FC = () => {
  //   let cnt = 0;
  const [cnt, setCnt] = useState(0);

  //add value to cnt
  const addPress = () => {
    setCnt(cnt + 1);
    console.log(cnt);
  };

  const resetVal = () => {
    console.log(cnt);
    setCnt(0);
  };

  return (
    <View>
      <Text className="text-blue-500">
        {name} {cnt}
      </Text>
      <Button title="Add" onPress={addPress} />
      <Button title="Reset" onPress={resetVal} />
    </View>
  );
};
