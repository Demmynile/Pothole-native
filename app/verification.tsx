import { Text, Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import close from "../assets/images/Close.png";
import { useRouter } from "expo-router";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Button from "../components/Button";

const verification = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex-row gap-x-4 items-center p-4 mt-5 ">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={close} className="w-5 h-5" />
        </TouchableOpacity>

        <Text className="text-lg font-interFont font-extrabold">
          Verification
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center mt-[90px] space-y-3">
        <View className="flex flex-row items-center justify-start space-x-2">
          <TextInput
            className="w-[59px] h-[60px] p-4 border border-[#6b6b6b] text-2xl font-interFont font-thin text-gray-700 rounded-2xl focus:border focus:border-black"
            inputMode="tel"
            maxLength={1}
          />

          <TextInput
            className="w-[59px] h-[60px] p-4 border border-[#6b6b6b] text-2xl font-interFont font-thin text-gray-700 rounded-2xl focus:border focus:border-black"
            inputMode="tel"
            maxLength={1}
          />

          <TextInput
            className="w-[59px] h-[60px] p-4 border border-[#6b6b6b] text-2xl font-interFont font-thin text-gray-700 rounded-2xl focus:border focus:border-black"
            inputMode="tel"
            maxLength={1}
          />

          <TextInput
            className="w-[59px] h-[60px] p-4 border border-[#6b6b6b] text-2xl font-interFont font-thin text-gray-700 rounded-2xl focus:border focus:border-black"
            inputMode="tel"
            maxLength={1}
          />
        </View>
        <View className="mt-1 p-4 ml-5 self-center">
          <Text className="text-md font-semibold text-black">
            Didn't get a text?{" "}
            <Text className="text-black font-semibold underline">
              Send again
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default verification;
