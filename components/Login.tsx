import { FC } from "react";
import { useState } from "react";

import {
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  Alert,
  Pressable,
  Button,
  TextInput,
} from "react-native";

export const Login: FC = () => {
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState("");

  return (
    <>
      <ScrollView className="bg-gray-100 w-full h-full py-20">
        <View className="items-center">
          <View style={{ width: 300, height: 200 }}>
            <Image
              style={{ flex: 1, width: undefined, height: undefined }}
              source={require("../assets/logo.png")}
            />
          </View>

          <View className="w-1/2 mb-10">
            <Text className="text-lg text-blue-400 font-medium">
              รหัสพนักงาน
            </Text>
            <TextInput placeholder="Staff ID" className="rounded-md border p-1 px-2 border-gray-400 text-gray-500" />
            <Text  className="text-lg  text-blue-400 font-medium mt-2">
              รหัสผ่าน
            </Text>
            {/* <TextInput className="rounded-md border p-1 px-2 border-gray-400" secureTextEntry={true} /> */}
            <TextInput
              className="rounded-md border p-1 px-2 border-gray-400"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>

          <View className="w-1/2 flex flex-row space-x-2">
            <Pressable className="bg-blue-500 rounded-md p-2 w-2/3">
              <Text className=" text-center text-gray-200">เข้าสู่ระบบ</Text>
            </Pressable>
            <Pressable className="bg-red-500 rounded-md p-2 w-1/3">
              <Text className=" text-center text-gray-200">ยกเลิก</Text>
            </Pressable>
          </View>

          <Text className="text-lg underline mt-10">สร้างบัญชีผู้ใช้ใหม่</Text>
        </View>
      </ScrollView>
    </>
  );
};
