import recipesData, { Recipe } from "../../dummydata/recipes";
import { get, post } from "./helpers";

function getRecipes() {
  return get(`http://localhost:5000/api/recipes`);
}

function getRecipeById(recipeId: string): Recipe {
  return recipesData.find((recipe) => recipe.id === recipeId);
}

function saveRecipe(recipe) {}

export default {
  getRecipes,
  getRecipeById,
};
