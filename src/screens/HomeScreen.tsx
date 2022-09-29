import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import Colors from "../constants/Colors";
import MenuItemThumb from "../components/MenuItemThumb/MenuItemThumb";
import recipesService from "../api/RecipesService";
import { Recipe } from "../../dummydata/recipes";

const HomeScreen = (props: any) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function getRecipes() {
      const recipesList: Recipe[] = await recipesService.getRecipes();
      setRecipes(recipesList);
    }
    getRecipes();
  }, []);

  const renderItem = ({ item, index }) => (
    <MenuItemThumb
      title={item.name}
      image={item.image}
      onPress={() => {
        props.navigation.navigate("RecipeScreen", { recipe: item._id });
      }}
    />
  );

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <View style={styles.greetings}>
          <Text style={styles.header1}>Hi, Vadim</Text>
          <Text style={styles.header4}>Ready to cook for dinner?</Text>
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/images/dummy-profile.jpg")}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginTop: 30,
          }}
        />
      </View>
    </View>
  );
};

export const screenOptions = (navData: any) => {
  return {
    headerShown: false,
    headerTitle: "Home Page",
  };
};

const styles = StyleSheet.create({
  profileImageContainer: { width: 50, height: 50 },
  profileImage: { width: "100%", height: "100%", borderRadius: 6 },
  greetings: {},
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 25,
  },
  header1: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 0,
    paddingTop: 0,
  },
  header4: {
    color: "#C8C8C8",
    fontSize: 16,
  },
});

export default HomeScreen;
