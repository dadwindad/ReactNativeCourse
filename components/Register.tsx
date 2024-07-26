import { FC } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { z } from "zod";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { MyTextInput } from "./ui/MyTextInput";

//ควรให้ชื่อ field ตรงกับ ฐานข้อมูล

//z.string({required_error ทำงานเมื่อไม่ว่าง และไม่มีการตั้งค่า default ใน const { control, handleSubmit, reset } = useForm<LoginModel>({defaultValues: {
const RegisterSchema = z.object({
  userCode: z
    .string({ required_error: "กรุณากรอก" })
    .min(1, "กรุณากรอกรหัสนักงาน"),
  firstName: z
    .string({ required_error: "กรุณากรอก" })
    .min(1, "กรุณากรอกชื่อ")
    .max(50, "ห้ามเกิน 50 ตัวอักษร"),
  lastName: z
    .string({ required_error: "กรุณากรอก" })
    .min(1, "กรุณากรอกชื่อ")
    .max(50, "ห้ามเกิน 50 ตัวอักษร"),
  password: z
    .string({ required_error: "กรุณากรอก" })
    .min(8, "ความยาวมากกว่า 8 ตัวอักษร")
    .max(20, "ห้ามเกิน 20 ตัวอักษร"),
  age: z.coerce
    .number({ required_error: "กรุณากรอก" })
    .min(8, "อายุไม่ต่ำกว่า 18 ปี")
    .max(99, "อายุไม่เกิน 99 ปี"),
});

type RegisterModel = z.infer<typeof RegisterSchema>;

export const Register: FC = () => {
  //begin hook
  const navigator = useNavigation<NavigationProp<any>>();

  const { control, handleSubmit, reset } = useForm<RegisterModel>({
    resolver: zodResolver(RegisterSchema),
  });
  //end hook

  //begin function
  const validatePass: SubmitHandler<RegisterModel> = async (register) => {
    //TODO:send data to api
    //notify to user

    //check server
    try {
      const resp = await fetch("http://13.212.82.218/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(register),
      });

      const jsonResp = await resp.json();

      if (jsonResp.success) {
        Alert.alert("ลงทะเบียนสำเร็จ", "กรุณาตรวจสอบอีเมล์ !!", [
          { text: "OK", onPress: () => navigator.goBack() },
        ]);
        //back to Login screen

        console.log(register);
      } else {
        Alert.alert("แจ้งเตือน", jsonResp.message);
      }
    } catch (e) {
      Alert.alert("พบปัญหา", "กรุณาลองใหม่");
    }
  };

  const validateFail: SubmitErrorHandler<RegisterModel> = (register) => {
    //show warning
    console.log(register);
  };

  const resetForm = () => {
    reset();
  };
  //end function
  return (
    <>
      <ScrollView className="w-full h-full flex flex-col p-8">
        <View>
          <Text className="text-2xl">Register</Text>
        </View>
        <View>
          <MyTextInput control={control} lable="รหัสพนักงาน" name="userCode" />
        </View>
        <View>
          <MyTextInput control={control} lable="ชื่อ" name="firstName" />
        </View>
        <View>
          <MyTextInput control={control} lable="นามสกุล" name="lastName" />
        </View>
        <View>
          <MyTextInput
            control={control}
            lable="รหัสผ่าน"
            name="password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <MyTextInput
            control={control}
            lable="อายุ"
            name="age"
            keyboardType="number-pad"
          />
        </View>

        <View className="flex flex-row space-x-2">
          <Pressable
            onPress={handleSubmit(validatePass, validateFail)}
            className="flex-1 bg-green-600 rounded-xl p-3"
          >
            <Text className="text-gray-100 text-center">ลงทะเบียน</Text>
          </Pressable>
          <Pressable
            onPress={resetForm}
            className="flex-1 bg-red-600 rounded-xl p-3"
          >
            <Text className="text-gray-100 text-center">ยกเลิก</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};
