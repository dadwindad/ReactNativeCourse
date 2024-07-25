import { FC, Fragment } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { z } from "zod";
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { MyTextInput } from "./ui/MyTextInput";

const LoginSchema = z.object({
  userCode: z
    .string({ required_error: "กรุณาระบุรหัสพนักงาน" })
    .min(1, "กรุณาระบุรหัสพนักงาน 1"),
  password: z
    .string({ required_error: "กรุณาระบุรหัสผ่าน" })
    .min(8, "รหัสผ่านขั้นต่ำ 8 ตัวอักษร")
    .max(50, "รหัสผ่านห้ามเกิน 50 ตัวอักษร"),
});

type LoginModel = z.infer<typeof LoginSchema>;

export const Login: FC = () => {
  //begin hooks
  const navigator = useNavigation<NavigationProp<any>>();

  const { control, handleSubmit, reset } = useForm<LoginModel>({
    defaultValues: {
      userCode: "test-userCode",
      password: "test-password",
    },
    resolver: zodResolver(LoginSchema),
  });
  //end hooks

  //begin function
  const validatePass: SubmitHandler<LoginModel> = (login) => {
    //when valid pass
    //TODO: send login data to api
    console.log(login);
    navigator.navigate("MainApp");
  };

  const validateFail: SubmitErrorHandler<LoginModel> = (error) => {
    //when validate fail
    //TODO: show warning dialog
    console.log(error);
  };

  const resetForm = () => {
    //when reset button
    reset();
  };

  const gotoRegister = () => {
    navigator.navigate("Register");
  };

  //end function
  return (
    <Fragment>
      <ScrollView className="bg-gray-100 w-full h-full p-8 space-y-4">
        <View className="mt-8 flex flex-col items-center">
          <Image
            className="object-scale-down h-48 w-96"
            source={require("../assets/logo.png")}
          />
        </View>
        <View>
          <MyTextInput control={control} name="userCode" lable="รหัสพนักงาน" />
        </View>
        <View>
          <MyTextInput
            control={control}
            name="password"
            lable="รหัสผ่าน"
            secureTextEntry={true}
          />
        </View>

        <View className="flex flex-row space-x-2">
          <Pressable
            onPress={handleSubmit(validatePass, validateFail)}
            className="flex-1 bg-blue-800 border rounded-xl p-2"
          >
            <Text className="text-center text-gray-100">เข้าสู่ระบบ</Text>
          </Pressable>
          <Pressable
            onPress={resetForm}
            className="flex-1 bg-red-500 rounded-xl p-2"
          >
            <Text className="text-center text-gray-100">ยกเลิก</Text>
          </Pressable>
        </View>

        <Pressable onPress={gotoRegister}>
          <Text className="tracking-wider text-lg text-center text-blue-400 underline font-medium">
            สร้างบัญชีผู้ใช้ใหม่
          </Text>
        </Pressable>
      </ScrollView>
    </Fragment>
  );
};
