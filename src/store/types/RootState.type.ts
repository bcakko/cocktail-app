import { CocktailsState } from "./cocktails.type";
import { IngredientsState } from "./ingredients.type";

export type RootState = {
  ingredients: IngredientsState;
  cocktails: CocktailsState;
};
