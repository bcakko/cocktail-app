import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_INGREDIENTS_FETCH,
  GET_INGREDIENTS_SUCCESS,
} from "../actions/ingredientsActions";
import { Ingredients, IngredientsEntity } from "../types/ingredients.type";

function ingredientsFetch() {
  return fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
  ).then((response) => response.json());
}

function* workGetIngredientsFetch() {
  const ingredients: Ingredients = yield call(ingredientsFetch);
  const ingredientsList: IngredientsEntity[] = yield ingredients.drinks;
  const sortedIngredients: string[] = yield ingredientsList
    .map((e: IngredientsEntity) => e.strIngredient1)
    .sort();

  yield put({
    type: GET_INGREDIENTS_SUCCESS,
    payload: { ingredients: sortedIngredients },
  });
}

function* ingredientsSaga() {
  yield takeEvery(GET_INGREDIENTS_FETCH, workGetIngredientsFetch);
}

export default ingredientsSaga;
