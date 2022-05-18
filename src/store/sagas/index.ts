import { all, fork } from "redux-saga/effects";
import ingredientsSaga from "./ingredientsSaga";
import cocktailsSaga from "./cocktailsSaga";

const sagas = function* () {
  yield all([fork(ingredientsSaga), fork(cocktailsSaga)]);
};

export default sagas;
