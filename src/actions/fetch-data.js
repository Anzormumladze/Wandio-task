import { gamesDataRequest } from "./fetch-data-request";
import { gamesDataSuccess } from "./fetch-data-success";
import { gamesDataError } from "./fetch-data-error";
import { fetchGameData } from "../services/requests";

export const getGamesDashboard = (data) => async (dispatch) => {
  dispatch(gamesDataRequest());
  try {
    const responseData = await fetchGameData(data);
    console.log(responseData, "00011");

    dispatch(gamesDataSuccess(responseData));
  } catch (e) {
    console.log(e);
    return dispatch(gamesDataError());
  }
};
