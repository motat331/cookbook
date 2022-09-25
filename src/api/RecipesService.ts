import recipesData, { Recipe } from "../../dummydata/recipes";

function getRecipes(): Recipe[] {
  return recipesData;
}

function getRecipeById(recipeId: string): Recipe {
  return recipesData.find((recipe) => recipe.id === recipeId);
}

export default {
  getRecipes,
  getRecipeById,
};
