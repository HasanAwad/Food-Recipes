import React from "react";
import { View, TextInput, Image } from "react-native";
import { icons } from "../../constants";
const Search = ({ placeHolder }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        alignItems: "center",
        marginHorizontal: 25,
        paddingHorizontal: 15,
        backgroundColor: "#DBDFEB",
        borderRadius: 7,
      }}
    >
      <Image
        source={icons.search}
        style={{ width: 20, height: 20, tintColor: "grey" }}
      />
      <TextInput
        placeholderTextColor="grey"
        placeholder={placeHolder}
        style={{ marginLeft: 10 }}
      />
    </View>
  );
};

export default Search;
