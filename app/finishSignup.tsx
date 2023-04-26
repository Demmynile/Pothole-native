import { useRouter } from "expo-router";
import React from "react";
import close from "../assets/images/Close.png";
import { Image, View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const finishSignup = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      {/* cancel title */}
      <View className="flex-row gap-x-4 items-center p-4 mt-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={close} className="w-5 h-5" />
        </TouchableOpacity>
        <Text className="text-xl font-bold font-interFont">
          Finish signing up
        </Text>
      </View>

      {/* Section */}
      <View className="flex flex-col items-center justify-center space-y-10 mt-9">
        {/* Name */}
        <View className=" flex flex-col space-y-3">
          <View>
            <TextInput
              className="w-[340px] h-[60px] p-4 border border-b-none text-2xl font-interFont font-thin text-gray-700 rounded-t-lg focus:border focus:border-black"
              placeholder="First name"
              inputMode="text"
            />
            <TextInput
              className="w-[340px] h-[60px] p-4 border border-t-none text-2xl font-interFont font-thin text-gray-700 rounded-b-lg focus:border focus:border-black"
              placeholder="Last Name"
              inputMode="text"
            />
          </View>
          <View>
            <Text className="text-center">
              Make sure it matches the name on government Id
            </Text>
          </View>
        </View>

        {/* Phone Number */}
        <View className="flex flex-col space-y-3">
          <View>
            <TextInput
              className="w-[340px] h-[60px] p-4 border border-[#6b6b6b] text-2xl font-interFont font-thin text-gray-700 rounded-2xl focus:border focus:border-black"
              placeholder="Phone number"
              inputMode="tel"
            />
          </View>
          <View>
            <Text className="text-center">
              We’ll text you a code whenever you need to login{" "}
            </Text>
          </View>
        </View>

        {/* Terms and Condition */}
        <View className="w-[340px] h-[80px]  flex justify-start">
          <Text className="text-start text-lg">
            By selecting{" "}
            <Text className="text-[#172A8E] underline font-interFont font-bold">
              Agree and continue
            </Text>
            . I agree to{"\n"}
            [App Name/Org]’s Terms of Service and {"\n"}
            acknowledge the{" "}
            <Text className="text-[#172A8E] font-interFont font-bold underline">
              Privacy Policy
            </Text>
          </Text>
        </View>

        {/* Button */}
        <View>
          <Button
            className=" flex items-center justify-center bg-black w-[343px] h-[60px] rounded-md"
            type="submit"
          >
            <Text className="text-white font-extrabold text-xl text-center mt-4">
              {" "}
              Agree and Continue
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default finishSignup;
