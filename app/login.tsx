import { Text, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import close from "../assets/images/Close.png";
import { useRouter } from "expo-router";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";

const login = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex-row gap-x-4 items-center p-4 mt-5 ">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={close} className="w-5 h-5" />
        </TouchableOpacity>

        <Text className="text-lg font-interFont font-extrabold">Log in</Text>
      </View>
      <View className="flex items-center justify-center mt-8">
        <TextInput
          className="w-[340px] h-[60px] p-4 border border-[#6b6b6b] text-2xl font-interFont font-thin text-gray-700 rounded-2xl focus:border focus:border-black"
          placeholder="Phone number"
          inputMode="tel"
        />
        <View className="mt-1 p-4 ml-5 self-start">
          <Text className="text-md font-semibold text-black ">
            We’ll send a 4-digit code to you
          </Text>
        </View>
      </View>
      <View className="flex flex-col items-center justify-center mt-8  h-[180px] gap-y-5">
        <View className="bg-white">
          <Button
            type="submit"
            className="w-[340px] h-[60px] bg-primaryColor rounded-lg flex items-center justify-center"
            onPress={() => router.push("verification")}
          >
            Log in
          </Button>
        </View>
        <View>
          <Button
            className=" flex items-center justify-center"
            type="submit"
            onPress={() => router.push("signup")}
          >
            <Text className="text-black font-extrabold text-xl text-center mt-4 ">
              {" "}
              Sign up
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
