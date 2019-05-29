/* global Promise */

import Pizza from "../data/Pizza";

export const fetchPizzas = () => {
  return new Promise(resolve => {
    const { data } = Pizza.response;

    resolve(data);
  });
};
