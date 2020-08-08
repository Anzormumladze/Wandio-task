import { GAMES_DATA_SUCCESS } from "./actionsTypes/index";

export const gamesDataSuccess = (data) => ({
  type: GAMES_DATA_SUCCESS,
  payload: data,
});
