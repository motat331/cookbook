export interface Ingredient {
  id: string;
  name: string;
  unit: string;
}

export type Recipe = {
  _id: string;
  name: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string;
};
