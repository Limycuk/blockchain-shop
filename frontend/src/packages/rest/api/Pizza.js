/* global Promise */

import Pizza from "../data/pizza.json";

export const fetchPizzas = () => {
  return new Promise(resolve => {
    const { data } = Pizza.response;

    resolve(data);
  });
};
