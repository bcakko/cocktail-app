import { getDetailsAction } from "./../types/details.type";
import { CocktailsFetchAction } from "../types/cocktails.type";

export const GET_COCKTAILS_FETCH: string = "GET_COCKTAILS_FETCH";
export const GET_COCKTAILS_SUCCESS: string = "GET_COCKTAILS_SUCCESS";
export const GET_COCKTAILS_FAILURE: string = "GET_COCKTAILS_FAILURE";
export const GET_RANDOM_COCKTAIL_FETCH: string = "GET_RANDOM_COCKTAIL_FETCH";
export const GET_RANDOM_COCKTAIL_SUCCESS: string =
  "GET_RANDOM_COCKTAIL_SUCCESS";
export const GET_RANDOM_COCKTAIL_FAILURE: string =
  "GET_RANDOM_COCKTAIL_FAILURE";
export const GET_DETAILS_FETCH: string = "GET_DETAILS_FETCH";
export const GET_DETAILS_SUCCESS: string = "GET_DETAILS_SUCCESS";

export const getCocktailsFetch = (
  ingredientName: string | undefined
): CocktailsFetchAction => ({
  type: GET_COCKTAILS_FETCH,
  payload: { name: ingredientName },
});

export const getRandomCocktailFetch = () => ({
  type: GET_RANDOM_COCKTAIL_FETCH,
});

export const getDetailsFetch = (
  cocktailId: string | undefined
): getDetailsAction => ({
  type: GET_DETAILS_FETCH,
  payload: { id: cocktailId },
});
