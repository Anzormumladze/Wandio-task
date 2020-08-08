let ROOT_KEY = " https://www.balldontlie.io/api/v1/";

export const GET_ROOT = () => {
  return ROOT_KEY;
};

export const SET_ROOT = (newRoot) => {
  ROOT_KEY = newRoot;
};

export default {
  GAMES: "games",
};
