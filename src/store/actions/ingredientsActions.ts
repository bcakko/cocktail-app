import { AnyAction } from "redux";

export const GET_INGREDIENTS_FETCH: string = "GET_INGREDIENTS_FETCH";
export const GET_INGREDIENTS_SUCCESS: string = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILURE: string = "GET_INGREDIENTS_FAILURE";

export const getIngredientsFetch = (): AnyAction => ({
  type: GET_INGREDIENTS_FETCH,
});
