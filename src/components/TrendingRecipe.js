import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../../constants";
import { BlurView } from "expo-blur";

const TrendingRecipe = ({ onPress, renderedItem, containerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 10 }}>
      <Image
        source={renderedItem.item.image}
        style={{ width: 250, height: 350, borderRadius: 10 }}
      />
      <View
        style={{
          position: "absolute",
          top: 15,
          left: 20,
          backgroundColor: "gray",
          borderRadius: 50,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text style={{ color: "white" }}> Pasta</Text>
      </View>
      <View style={{ borderRadius: 20 }}>
        <BlurView
          intensity={85}
          style={{
            position: "absolute",
            bottom: 10,
            left: 20,
            right: 20,
            backgroundColor: "#8c8c8c",
            height: 100,
            paddingVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              flex: 1,
              margin: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white", width: 120 }}>
                Testing with some extra testing
              </Text>
              <Image
                source={icons.bookmark}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text>30 Mins | 1 Serving</Text>
          </View>
        </BlurView>
      </View>
    </TouchableOpacity>
  );
};

export default TrendingRecipe;
