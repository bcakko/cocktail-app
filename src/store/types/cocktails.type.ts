import { Details, DetailsEntity } from "./details.type";
export interface Cocktails {
  drinks: CocktailsEntity[] | null;
}

export interface CocktailsEntity {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface CocktailsState {
  drinks: CocktailsEntity[];
  isLoading: boolean;
  selectedIngredient: string;
  randomCocktail: DetailsEntity[];
  selectedDrinkId: string;
  selectedCocktailDetails: Details;
}

export interface CocktailsFetchAction {
  type: string;
  payload: {
    name: string | undefined;
  };
}

export interface CocktailsSuccessAction {
  type: string;
  payload: {
    drinks: CocktailsEntity[];
  };
}
