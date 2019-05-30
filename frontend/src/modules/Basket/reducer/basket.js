import { handleActions } from "redux-actions";

import * as basketActions from "../actions";

const defaultState = {};

export default handleActions(
  {
    [basketActions.updateOrder]: (state, action) => {
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
