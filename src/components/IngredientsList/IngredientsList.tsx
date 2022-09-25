import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Ingredient } from "../../../dummydata/recipes";
import Colors from "../../constants/Colors";

interface Props {
  ingredients: Ingredient[];
}

const IngredientsList = ({ ingredients }: Props) => {
  return (
    <View style={styles.ingredientsContainer}>
      {ingredients.map((item) => (
        <View style={styles.ingredient} key={item.id}>
          <Text style={styles.unit}>{item.unit}</Text>
          <Text style={styles.ingredientText}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
  ingredient: {
    minWidth: "48%",
    maxWidth: "48%",
    borderRadius: 30,
    // height: "100%",
    backgroundColor: Colors.background,
    padding: 20,
    // marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
  },
  unit: { color: "#C8C8C8", fontSize: 12, marginRight: 5 },

  ingredientText: {
    color: "white",
    textAlign: "center",
  },
});

export default IngredientsList;
