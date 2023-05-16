import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import vector from "../assets/images/Vector.png";
import question from "../assets/images/exclamation.png";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="mt-3 mx-2 max-w-9xl p-5 flex-row items-center justify-between">
        <View>
          <Text className="text-black font-bold text-2xl">Home </Text>
        </View>
        <View>
          <Image source={vector} className="w-5 h-5" />
        </View>
      </View>
      <View className="mt-3 mx-5 p-1  flex flex-col justify-start space-y-3">
        <View>
          <Text className="font-bold text-xl">Get Started</Text>
        </View>
        <View className="w-full rounded-md bg-[#1A1742] h-[90px] flex items-center justify-center space-x-3">
          <View className=" w-full">
            <View>
              <Image source={question} />
            </View>
            <View className="flex flex-col items-center space-y-1 bg-black">
              <View>
                <Text className="w-[137px] h-[19px] text-white">
                  Report a porthole
                </Text>
              </View>
              <View>
                <Text className="w-[240px] h-[32px] text-white">
                  Capture the location and add details to help us locate and
                  repair portholes.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
