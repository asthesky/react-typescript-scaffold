import { Middleware } from "redux";

export const authentication: Middleware = (store) => (next) => (action) => {
  return next(action);
};
