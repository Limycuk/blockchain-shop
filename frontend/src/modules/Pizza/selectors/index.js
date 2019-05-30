import { createSelector } from "reselect";

const getState = state => state.modules.pizza;

export const getBasket = state => getState(state).basket;

export const getPizzasCount = createSelector(
  getBasket,
  basket => {
    return Object.values(basket).reduce((memo, pizza) => {
      if (pizza.big) {
        memo += pizza.big.count;
      }

      if (pizza.standart) {
        memo += pizza.standart.count;
      }

      if (pizza.thin) {
        memo += pizza.thin.count;
      }

      return memo;
    }, 0);
  }
);
