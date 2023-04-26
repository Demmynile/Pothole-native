import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import Button from "../components/Button";

const WelcomeScreenInfo = () => {
  const router = useRouter();

  // font setUp
  const [fontsLoaded] = useFonts({
    inter: require("../assets/fonts/Inter-Regular.ttf"),
    ultra: require("../assets/fonts/Ultra-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView className="flex flex-col items-center justify-center gap-y-5 w-screen h-screen">
      <View>
        <Text className="text-2xl text-center font-interFont-100 w-[286px] h-[75px] font-bold">
          Report a porthole {"\n"} anywhere, anytime
        </Text>
      </View>
      <View className="flex flex-col gap-y-6">
        <Text className="text-center text-xl font-interFont ">
          Upload a picture of a {"\n"} pothole you’ve encountered
        </Text>
        <Text className="text-center text-lg font-interFont p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborumnumquam blanditiis {"\n"} harum quisquam eius sed
          odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident
          similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius
          earum ut{" "}
        </Text>
      </View>
      <View className="flex flex-col gap-y-3 font-interFont">
        <Button
          className="w-[224px] h-[60px] bg-primaryColor rounded-lg flex items-center justify-center"
          type="submit"
          onPress={() => router.push("/signup")}
        >
          <Text className="text-white font-extrabold text-xl text-center">
            {" "}
            Register
          </Text>
        </Button>
        <Button className=" flex items-center justify-center" type="submit">
          <Text className="text-black font-extrabold text-xl text-center mt-4">
            {" "}
            Skip
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreenInfo;
