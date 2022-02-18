import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { images, icons } from "../../constants";
import RecipeCard from "../components/RecipeCard";
import TrendingRecipe from "../components/TrendingRecipe";
import Header from "../components/Header";
import Search from "../components/Search";
import Banner from "../components/Banner";

const Data = [
  {
    id: 1,
    title: "Mloukhiye",
    duration: "10 Mins",
    serving: "20",
    image: images.loginBackground,
  },
  {
    id: 1,
    title: "Mloukhiye",
    duration: "10 Mins",
    serving: "20",
    image: images.loginBackground,
  },
  {
    id: 1,
    title: "Mloukhiye",
    duration: "10 Mins",
    serving: "20",
    image: images.loginBackground,
  },
  {
    id: 1,
    title: "Mloukhiye",
    duration: "10 Mins",
    serving: "20",
    image: images.loginBackground,
  },
];
export default function Home({ navigation }) {
  function renderHeader() {
    return (
      <View>
        <Header
          image={images.avatar}
          titleText="Hello Hasan"
          subText="What you want to cook today?"
          titleColor="#1DA183"
        />
      </View>
    );
  }

  function renderSearchBar() {
    return <Search placeHolder="Search Recipes" />;
  }

  function renderBanner() {
    return (
      <Banner
        image={images.recipeLogo}
        text="You have 12 recipes that you haven't tried yet."
        buttonText="See Recipes"
      />
    );
  }

  function renderTrends() {
    return (
      <FlatList
        horizontal
        data={Data}
        renderItem={(item) => <TrendingRecipe renderedItem={item} />}
        keyExtractor={(item) => item.id}
        keyboardDismissMode="on-drag"
        showsHorizontalScrollIndicator={false}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {renderSearchBar()}
            {renderBanner()}
            {renderTrends()}
          </View>
        }
        renderItem={(item) => (
          <RecipeCard
            recipeItem={item}
            containerStyle={{ marginHorizontal: 15 }}
            onPress={() => navigation.navigate("Recipe", { item: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}
