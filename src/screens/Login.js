import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StatusBar,
  ImageComponent,
} from "react-native";
import styled from "styled-components/native";

import { LinearGradient } from "expo-linear-gradient";
import { images } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";

export default function Login({ navigation }) {
  const Wrapper = styled.View`
    background-color: black;
    flex: 1;
  `;
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" />
      <View style={{ height: "75%" }}>
        <ImageBackground
          source={images.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["transparent", "black"]}
            style={{
              height: 200,
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                width: "55%",
                color: "white",
                fontSize: 30,
                lineHeight: 38,
                paddingHorizontal: 20,
              }}
            >
              Tasty & Simple Food Recipes
            </Text>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <Text style={{ color: "grey", width: "70%" }}>
                Discover more than 1200 food recipes Discover more than 1200
                food recipes Discover more than 1200 food recipes
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <CustomButton
          text="Login"
          colors={["#1DA183", "#46D59D"]}
          customStyle={{
            paddingVertical: 18,
            color: "white",
            borderRadius: 20,
          }}
          textColor={"white"}
          onPress={() => navigation.replace("Home")}
        />

        <CustomButton
          text="Login"
          colors={["black", "black"]}
          customStyle={{
            marginTop: 7,
            paddingVertical: 18,
            color: "white",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "#1DA183",
          }}
          textColor={"white"}
        />
      </View>
    </Wrapper>
  );
}
