import { Store, createStore, applyMiddleware } from "redux";

import { RootReducer } from "./reducers";
import { RootState } from "./reducers/state";

import { authentication } from "./middleware/authentication/index";

export default function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(authentication);

  const store = createStore(RootReducer as any, initialState as any, middleware) as Store<RootState>;

  return store;
}
