import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  Text,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import MetaDetails from "../components/MetaDetails/MetaDetails";
import Tabber from "../components/Tabber/Tabber";
import IngredientsList from "../components/IngredientsList/IngredientsList";
import Instructions from "../components/Instructions/Instructions";
import RecipesService from "../api/RecipesService";
import { AppButton } from "../components/UI/AppButton";
import { Recipe } from "../interfaces/Recipe";

const RecipeScreen = (props: any) => {
  const [activeTab, setActiveTab] = useState<"Ingredients" | "Instructions">(
    "Instructions"
  );
  const [recipe, setRecipe] = useState<Recipe>(null);
  const [loadingSpinner, setIsLoading] = useState(false);
  const [updateMode, setUpdateMode] = useState<boolean>(true);

  useEffect(() => {
    async function init() {
      const recipeId = props.route.params.recipe;
      console.log("PARAMS: ", props.route.params.recipe);
      const foundRecipe = await RecipesService.getRecipeById(recipeId);
      setRecipe(foundRecipe);
      console.log("Recipe: ", foundRecipe);
    }
    init();
  }, []);

  function updateLocalData(instructions) {
    recipe.instructions = instructions;
    setRecipe(recipe);
  }

  async function updateRemoteData() {
    try {
      setIsLoading(true);
      await RecipesService.updateRecipeById(recipe._id, recipe);
      setUpdateMode(false);
      console.log("Success");
    } catch (err) {
      console.log("Error Updating Recipe: ", err);
    } finally {
      setIsLoading(false);
    }
  }

  return recipe ? (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.featuredImageContainer}>
          <Image style={styles.featuredImage} source={{ uri: recipe.image }} />
        </View>
        <View
          style={[
            styles.mainBodyContainer,
            updateMode && styles.updateModeContainer,
          ]}
        >
          <View style={styles.bodyTitle}>
            <Text style={styles.bodyText}>{recipe.name}</Text>
          </View>
          <MetaDetails></MetaDetails>
          <Tabber setActiveTab={setActiveTab} activeTab={activeTab}></Tabber>

          {activeTab == "Ingredients" ? (
            <IngredientsList ingredients={recipe.ingredients}></IngredientsList>
          ) : (
            <Instructions
              instructions={recipe.instructions}
              onUpdateInstructions={updateLocalData}
              updateMode={updateMode}
            ></Instructions>
          )}
          {!updateMode && (
            <View style={styles.updateButtonContainer}>
              <AppButton
                text={"Update"}
                onPress={() => {
                  console.log("Update: ", updateMode);
                  setUpdateMode(!updateMode);
                }}
                activityIndicator={loadingSpinner}
              />
            </View>
          )}
        </View>
      </ScrollView>
      {updateMode && (
        <View style={styles.updateButtonContainerFloating}>
          <AppButton
            style={{
              position: "absolute",
              bottom: 10,
            }}
            text={"Update"}
            onPress={() => {
              updateRemoteData();
            }}
            activityIndicator={loadingSpinner}
          />
        </View>
      )}
    </View>
  ) : (
    <View></View>
  );
};
const styles = StyleSheet.create({
  updateButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  updateButtonContainerFloating: {
    // padding: 20,
    backgroundColor: "rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    // marginBottom: 40,
  },
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
    // paddingBottom: 30,
    paddingBottom: 10,
  },
  updateModeContainer: {
    paddingBottom: 80,
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
    backgroundColor: Colors.background_offset,
  },
  navIcon: {
    alignSelf: "center",
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
            style={[styles.navIcon, styles.backButtonIcon]}
            name={"chevron-left"}
            size={50}
            color={"white"}
          />
        </View>
      </Pressable>
    ),
    // headerRight: () => (
    //   <Pressable onPress={updateRemoteData} style={styles.backButtonContainer}>
    //     <View>
    //       <Icon
    //         style={[styles.navIcon]}
    //         name={"check"}
    //         size={40}
    //         color={"#A7C38B"}
    //       />
    //     </View>
    //   </Pressable>
    // ),
  };
};

export default RecipeScreen;
