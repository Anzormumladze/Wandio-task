import {
  GAMES_DATA_REQUEST,
  GAMES_DATA_SUCCESS,
  GAMES_DATA_ERROR,
} from "../actions/actionsTypes/index";

const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case GAMES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GAMES_DATA_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: false,
      };
    case GAMES_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default: {
      return state;
    }
  }
}

// export const getProducts = (state) => state.products;
// export const getProductsPending = (state) => state.pending;
// export const getProductsError = (state) => state.error;
