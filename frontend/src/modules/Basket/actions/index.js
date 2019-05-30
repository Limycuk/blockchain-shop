import { createAction } from "redux-actions";

import { NAMESPACE } from "../constants";

export const updateOrder = createAction(NAMESPACE + "UPDATE_ORDER");
