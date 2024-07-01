import { baseUrl } from "./constants";
export const processServerRequest = (url, options) => {
  return fetch(url, options).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
  );
};

export const getNews = (search) => {
  return processServerRequest(baseUrl(search));
};
