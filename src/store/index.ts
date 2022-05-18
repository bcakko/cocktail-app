import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import cocktailsReducer from "./reducers/cocktailsReducer";
import ingredientsReducer from "./reducers/ingredientsReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    cocktails: cocktailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
