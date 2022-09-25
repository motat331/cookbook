import { ImageSourcePropType } from "react-native";

export interface Ingredient {
  id: string;
  name: string;
  unit: string;
}

export type Recipe = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  ingredients: Ingredient[];
};

const data: Recipe[] = [
  {
    id: "1",
    name: "Strawberry Cake",
    image: require("../assets/images/items/cake.jpg").toString(),
    ingredients: [
      { id: "1", name: "Egg", unit: "2x" },
      { id: "2", name: "Flour", unit: "2 cup" },
      { id: "3", name: "Strawberries", unit: "15" },
    ],
  },
  {
    id: "2",
    name: "Chicken & Steak Kabobs",
    image: require("../assets/images/items/kabob.jpg").toString(),
    ingredients: [
      { id: "1", name: "Tomato", unit: "2x" },
      { id: "2", name: "Chicken Breast", unit: "2x" },
      { id: "3", name: "Apple", unit: "Half an" },
      { id: "4", name: "Parsley", unit: "1/2 Tsp." },
      { id: "5", name: "Salt", unit: "Pinch of" },
      { id: "6", name: "Pasta", unit: "18oz" },
    ],
  },
  {
    id: "3",
    name: "Pancake Stacks",
    image: require("../assets/images/items/pancakes.jpg").toString(),
    ingredients: [
      { id: "1", name: "Flour", unit: "3 cup" },
      { id: "2", name: "Blueberries", unit: "1 cup" },
      { id: "3", name: "Bananas", unit: "2" },
      { id: "4", name: "Egg", unit: "4" },
      { id: "5", name: "Water", unit: "Half a cup" },
    ],
  },
  {
    id: "4",
    name: "Pineapple Pizza",
    image: require("../assets/images/items/pizza.jpg").toString(),
    ingredients: [
      { id: "1", name: "Pineapple", unit: "One half" },
      { id: "2", name: "Chicken Breast", unit: "1x" },
      { id: "3", name: "Cheese", unit: "2 cup" },
      { id: "4", name: "Marinara Sauce", unit: "1 cup" },
      { id: "5", name: "Flour", unit: "1 cup" },
    ],
  },
  {
    id: "5",
    name: "Caesar Salad",
    image: require("../assets/images/items/salad.jpg").toString(),
    ingredients: [
      { id: "1", name: "Tomato", unit: "2x" },
      { id: "2", name: "Lettuce", unit: "2x" },
    ],
  },
  {
    id: "6",
    name: "Fruit Salad",
    image: require("../assets/images/items/salad1.jpg").toString(),
    ingredients: [{ id: "1", name: "Tomato", unit: "2x" }],
  },
];

export default data;
