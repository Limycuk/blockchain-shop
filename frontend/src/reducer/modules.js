import { combineReducers } from "redux";

import pizza from "~/modules/Pizza/reducer";

const reducer = combineReducers({
  pizza
});

export default reducer;
