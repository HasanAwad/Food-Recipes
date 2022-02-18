import React from "react";
import { View, Text, Image } from "react-native";

const Banner = ({ text, buttonText, image, onPress }) => {
  return (
    <View
      style={{
        backgroundColor: "#EDF8F1",
        height: 100,
        marginHorizontal: 25,
        borderRadius: 10,
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image source={image} style={{ width: 80, height: 80 }} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ marginBottom: 20, width: "70%" }}>{text}</Text>

        <Text
          style={{ textDecorationLine: "underline", color: "#1DA183" }}
          onPress={onPress}
        >
          {buttonText}
        </Text>
      </View>
    </View>
  );
};

export default Banner;
