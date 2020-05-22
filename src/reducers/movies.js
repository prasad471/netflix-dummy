import { SET_MOVIES } from "../constants/actionTypes";
import { handleActions } from "redux-actions";

export default handleActions(
  {
    [SET_MOVIES]: (state, action) => action.payload,
  },
  {}
);
