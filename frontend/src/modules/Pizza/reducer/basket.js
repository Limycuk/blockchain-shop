import { handleActions } from "redux-actions";

import * as pizzaActions from "../actions";

const defaultState = {};

export default handleActions(
  {
    [pizzaActions.updateOrder]: (state, action) => {
      const { id, size, price, count } = action.payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          [size]: {
            price,
            count
          }
        }
      };
    }
  },
  defaultState
);
