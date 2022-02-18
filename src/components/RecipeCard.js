import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function RecipeCard({ onPress, recipeItem, containerStyle }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: "#f7f7f7",
        ...containerStyle,
      }}
    >
      <Image
        source={recipeItem.item.image}
        resizeMode="cover"
        style={{ width: 100, height: 100, borderRadius: 5 }}
      />

      <View
        style={{
          width: "50%",
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: "30%",
          }}
        >
          {recipeItem.item.title}
        </Text>

        <Text style={{ color: "gray" }}>
          {recipeItem.item.duration} | {recipeItem.item.serving} Serving
        </Text>
      </View>
    </TouchableOpacity>
  );
}
