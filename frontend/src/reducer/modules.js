import { combineReducers } from "redux";

import basket from "~/modules/Basket/reducer";

const reducer = combineReducers({
  basket
});

export default reducer;
