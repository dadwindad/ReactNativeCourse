import { FC } from "react";
import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import { Controller, Control } from "react-hook-form";

interface Props {
  control: Control<any>;
  lable: string;
  name: string;
  secureTextEntry?: boolean; //? is optional
  keyboardType?: KeyboardTypeOptions | undefined;
}

//FC<Props> called generic
export const MyTextInput: FC<Props> = (props) => {
  return (
    <>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field, fieldState }) => (
          <>
            <Text className="font-light text-blue-800">{props.lable}</Text>
            <TextInput
              keyboardType={props.keyboardType}
              className="p-2 border border-gray-400 rounded-lg bg-white"
              onChangeText={field.onChange}
              value={field.value}
              secureTextEntry={props.secureTextEntry}
            />
            <Text className="text-red-400">{fieldState.error?.message}</Text>
          </>
        )}
      />
    </>
  );
};
