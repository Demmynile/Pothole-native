import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const welcome = () => {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    inter: require("../assets/fonts/Inter-Regular.ttf"),
    ultra: require("../assets/fonts/Ultra-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaView className="flex flex-col w-screen h-screen items-center justify-center space-y-[100px]">
        <View className="flex items-center justify-center gap-y-1">
          <Text className="w-[156px] h-[30px] text-[27px] font-extrabold text-primaryColor text-center">
            Welcome to
          </Text>
          <Text className="text-[49px] text-black font-interFont w-[320px] h-[60px] text-center">
            RoadCap App
          </Text>
          <Text className="w-[246px] h-[60px] text-xl font-interFront text-center text-[#000000]">
            Report potholes to help us make our roads safer
          </Text>
        </View>
        <View className="">
          <TouchableOpacity
            className="w-[224px] h-[60px] bg-primaryColor rounded-lg flex items-center justify-center"
            onPress={() => router.push("/welcomeScreenInfo")}
          >
            <Text className="text-white font-interFont-700 text-2xl ">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default welcome;
