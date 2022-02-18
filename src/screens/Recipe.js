import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, icons } from "../../constants";
import { BlurView } from "expo-blur";

export default function Recipe({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "50%" }}>
        <Image
          source={images.loginBackground}
          style={{ width: "100%", height: "100%" }}
        />
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
          <Text>Recipe by:</Text>
          <Text>Hasan Awwad</Text>
        </BlurView>
      </View>
      <View>
        <Text style={{ width: "40%" }}>Pasta asdasdas asdasdasda asdasd</Text>
      </View>

      <FlatList />
    </View>
  );
}
