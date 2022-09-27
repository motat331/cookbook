import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  ScrollView,
  Button,
} from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import MetaDetails from "../components/MetaDetails/MetaDetails";
import Tabber from "../components/Tabber/Tabber";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import Instructions from "../components/Instructions/Instructions";
import RecipesService from "../api/RecipesService";
import { Recipe } from "../../dummydata/recipes";

const RecipeScreen = (props: any) => {
  const [recipe, setRecipe] = useState<Recipe>(null);
  useEffect(() => {
    const recipeId = props.route.params.recipe;
    const foundRecipe = RecipesService.getRecipeById(recipeId);
    setRecipe(foundRecipe);
    console.log("Recipe: ", foundRecipe);
  }, []);

  const [activeTab, setActiveTab] = useState<"Ingredients" | "Instructions">(
    "Instructions"
  );
  return recipe ? (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.featuredImageContainer}>
        <Image style={styles.featuredImage} source={recipe.image} />
      </View>
      <View style={styles.mainBodyContainer}>
        <View style={styles.bodyTitle}>
          <Text style={styles.bodyText}>{recipe.name}</Text>
        </View>
        <MetaDetails></MetaDetails>
        <Tabber setActiveTab={setActiveTab} activeTab={activeTab}></Tabber>
        {/* <AppButton
          text={"Login"}
          onPress={authHandler}
          activityIndicator={loadingSpinner}
        /> */}
        {activeTab == "Ingredients" ? (
          <IngredientsList ingredients={recipe.ingredients}></IngredientsList>
        ) : (
          <Instructions instructions={recipe.instructions}></Instructions>
        )}
      </View>
    </ScrollView>
  ) : (
    <View></View>
  );
};
const styles = StyleSheet.create({
  bodyTitle: {
    padding: 20,
  },
  bodyText: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  mainBodyContainer: {
    backgroundColor: Colors.background_offset2,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // height: 1000,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  featuredImageContainer: {
    marginVertical: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  featuredImage: {
    width: 200,
    height: 200,
    borderRadius: 14,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  backButton: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonIcon: {
    alignSelf: "center",
    backgroundColor: Colors.background_offset,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 50,
    height: 50,
    borderRadius: 8,
  },
});

export const screenOptions = (navData: any) => {
  return {
    headerTitle: "",
    headerStyle: {
      backgroundColor: "rgba(0,0,0,.1)",
    },
    headerShadowVisible: false,
    headerTintColor: "white",
    headerTransparent: true,
    headerLeft: () => (
      <Pressable
        onPress={() => {
          navData.navigation.goBack();
        }}
        style={styles.backButtonContainer}
      >
        <View style={styles.backButton}>
          <Icon
            style={styles.backButtonIcon}
            name={"chevron-left"}
            size={50}
            color={"white"}
          />
        </View>
      </Pressable>
    ),
  };
};

export default RecipeScreen;
