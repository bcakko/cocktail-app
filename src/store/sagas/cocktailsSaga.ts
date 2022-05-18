import {
  GET_RANDOM_COCKTAIL_FETCH,
  GET_RANDOM_COCKTAIL_SUCCESS,
  GET_COCKTAILS_FETCH,
  GET_COCKTAILS_SUCCESS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FETCH,
} from "./../actions/cocktailsActions";
import { Details, DetailsEntity } from "./../types/details.type";
import { Cocktails, CocktailsEntity } from "./../types/cocktails.type";
import { call, put, takeEvery, select } from "redux-saga/effects";

import { RootState } from "../types/RootState.type";

const getSelectedIngredient = (state: RootState) =>
  state.cocktails.selectedIngredient;
const getSelectedCocktail = (state: RootState) =>
  state.cocktails.selectedDrinkId;

function cocktailsFetch(ingredient: string) {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=` + ingredient
  ).then((response) => response.json());
}
function randomCocktailFetch() {
  return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
    (response) => response.json()
  );
}

function selectedCocktailFetch(id: string) {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id
  ).then((response) => response.json());
}

function* workGetCocktailsFetch() {
  const selectedIngredient: string = yield select(getSelectedIngredient);
  const cocktails: Cocktails = yield call(cocktailsFetch, selectedIngredient);
  const drinks: CocktailsEntity[] = yield cocktails.drinks;
  yield put({ type: GET_COCKTAILS_SUCCESS, payload: { drinks } });
}

function* workGetRandomCocktailFetch() {
  const randomCocktail: Details = yield call(randomCocktailFetch);
  const randomCocktailDetails: DetailsEntity[] = yield randomCocktail.drinks;
  yield put({
    type: GET_RANDOM_COCKTAIL_SUCCESS,
    payload: { randomCocktail: randomCocktailDetails },
  });
}

function* workGetSelectedCocktail() {
  const selectedCocktailId: string = yield select(getSelectedCocktail);
  const selectedCocktail: Details = yield call(
    selectedCocktailFetch,
    selectedCocktailId
  );
  yield put({
    type: GET_DETAILS_SUCCESS,
    payload: { selectedCocktail },
  });
}

function* cocktailsSaga() {
  yield takeEvery(GET_COCKTAILS_FETCH, workGetCocktailsFetch);
  yield takeEvery(GET_RANDOM_COCKTAIL_FETCH, workGetRandomCocktailFetch);
  yield takeEvery(GET_DETAILS_FETCH, workGetSelectedCocktail);
}

export default cocktailsSaga;
