import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomButton({
  text,
  textColor,
  colors,
  customStyle,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors}
        style={{
          ...customStyle,
        }}
      >
        <Text style={{ color: textColor, textAlign: "center" }}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
