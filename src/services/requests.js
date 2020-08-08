import api, { GET_ROOT } from "../utils/constants/api";

const responseLogger = (res, url) => {
  console.log(`%c---RESPONSE--- ${url}`, "color:green", res);
};

const _fetch = (url) => {
  // requestLogger(body, token, url);
  const root = GET_ROOT();
  console.log(root);

  return fetch(root + url)
    .then((res) => {
      res
        .clone()
        .text()
        .then((errrrrr1) => console.log("errrrrr1", errrrrr1));

      if (res.status !== 200 || res.error) {
        throw res;
      }
      return res.json();
    })
    .then((data) => {
      responseLogger(data, url);
      return data;
    })
    .catch((err) => {
      console
        .log("errr2", err)

        // // .clone()
        // .text()
        .then((errrrrr2) => console.log("errrrrr2", errrrrr2));
    });
};

export const fetchGameData = () => _fetch(api.GAMES);
