import { AnyAction } from "redux";
import {
  GET_COCKTAILS_FETCH,
  GET_COCKTAILS_SUCCESS,
  GET_DETAILS_FETCH,
  GET_DETAILS_SUCCESS,
  GET_RANDOM_COCKTAIL_FETCH,
  GET_RANDOM_COCKTAIL_SUCCESS,
} from "./../actions/cocktailsActions";
import { CocktailsState } from "./../types/cocktails.type";

const initialState = {
  drinks: [
    {
      strDrink: "",
      strDrinkThumb: "",
      idDrink: "",
    },
  ],
  isLoading: false,
  selectedIngredient: "",
  selectedDrinkId: "",
  randomCocktail: [],
  selectedCocktailDetails: { drinks: [] },
};

const cocktailsReducer = (
  state: CocktailsState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_COCKTAILS_FETCH:
      return {
        ...state,
        selectedIngredient: action.payload.name,
        isLoading: true,
      };
    case GET_COCKTAILS_SUCCESS:
      return { ...state, drinks: action.payload.drinks, isLoading: false };
    case GET_RANDOM_COCKTAIL_FETCH:
      return { ...state, isLoading: true };
    case GET_RANDOM_COCKTAIL_SUCCESS:
      return {
        ...state,
        randomCocktail: action.payload.randomCocktail,
        isLoading: false,
      };
    case GET_DETAILS_FETCH:
      return { ...state, selectedDrinkId: action.payload.id };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        selectedCocktailDetails: action.payload.selectedCocktail,
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
