import { Recipe } from "../interfaces/Recipe";
import { get, post, patch } from "./helpers";

function getRecipes(): Promise<Recipe[]> {
  return get(`http://localhost:5000/api/recipes`);
}

function getRecipeById(recipeId: string): Promise<Recipe> {
  return get(`http://localhost:5000/api/recipe/${recipeId}`);
}

function updateRecipeById(recipeId, data): Promise<Recipe> {
  return patch(`http://localhost:5000/api/recipe/${recipeId}`, data);
}

function saveRecipe(recipe) {}

export default {
  getRecipes,
  getRecipeById,
  updateRecipeById,
};
