import { combineReducers } from "redux";
import { gamesReducer } from "./games-reducer";

export default combineReducers({
  gamesData: gamesReducer,
});
