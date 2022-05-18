import { AnyAction } from "redux";
import {
  GET_INGREDIENTS_FETCH,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredientsActions";

import { IngredientsState } from "../types/ingredients.type";

const initialState = {
  ingredients: [],
  isLoading: false,
};

const ingredientsReducer = (
  state: IngredientsState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_INGREDIENTS_FETCH:
      return { ...state, isLoading: true };

    case GET_INGREDIENTS_SUCCESS:
      return { ...state, ingredients: action.payload.ingredients };
    default:
      return state;
  }
};

export default ingredientsReducer;
