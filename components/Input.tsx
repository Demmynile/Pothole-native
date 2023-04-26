import { View, Text, TextInput } from "react-native";
import React from "react";

type Props = {
  keyboardType:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  placeholder?: string;
  placeholderStyle?: string;
  className: string;
  divClassName: string;
};

const Input = ({
  keyboardType,
  placeholder,
  className,
  divClassName,
}: Props) => {
  return (
    <View className={divClassName}>
      <TextInput
        placeholder={placeholder}
        inputMode={keyboardType}
        className={className}
      />
    </View>
  );
};

export default Input;
