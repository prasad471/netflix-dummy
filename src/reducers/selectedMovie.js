import { SELECT_MOVIE } from "../constants/actionTypes";
import { handleActions } from "redux-actions";

export default handleActions(
  {
    [SELECT_MOVIE]: (state, action) => state,
  },
  1
);
