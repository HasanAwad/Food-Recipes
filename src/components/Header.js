import React from "react";
import { View, Text, Image } from "react-native";

const Header = ({ titleColor, onPress, titleText, subText, image }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "7%",
        paddingVertical: "5%",
      }}
    >
      {/* "#1DA183" */}
      <View style={{ paddingTop: "3%" }}>
        <Text style={{ fontSize: 30, color: titleColor }}>{titleText}</Text>
        <Text style={{ color: "grey", paddingTop: "2%" }}>
          {/* What you want to cook today? */}
          {subText}
        </Text>
      </View>
      <View>
        <Image
          source={image}
          onPress={onPress}
          style={{ width: 70, height: 80 }}
        />
      </View>
    </View>
  );
};

export default Header;
