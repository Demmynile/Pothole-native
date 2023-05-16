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
      </View>
    </SafeAreaView>
  );
};

export default Home;
