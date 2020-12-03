import browserHistory from "../../browser-history";
import {APIRoute} from "../const";

export const redirect = (_store) => (next) => (action) => {
  if (action) {
    if (action.type === APIRoute.REDIRECT_TO_ROUTE) {
      browserHistory.push(action.payload);
    }
  }

  return next(action);
};
