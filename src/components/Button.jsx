import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const CustomButton = ({ title, buttonStyles, buttonTextStyle, onPress }) => {
  return (
    <TouchableOpacity style={{ ...buttonStyles }} onPress={onPress}>
      <Text style={{ ...buttonTextStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
