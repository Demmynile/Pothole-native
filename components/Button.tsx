import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "reset" | "button" | "undefined";
  onPress?: () => void;
};

const Button = ({ children, className, type, onPress, ...rest }: Props) => {
  return (
    <TouchableOpacity className={className} onPress={() => onPress()} {...rest}>
      <Text
        className={"text-white font-extrabold text-xl text-center" + className}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
