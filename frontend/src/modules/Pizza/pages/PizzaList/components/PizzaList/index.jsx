import React, { useCallback } from "react";
import PropTypes from "prop-types";

import useStyles from "./styles";
import useGetPizzaList from "../../hooks/useGetPizzaList";
import Pizza from "../Pizza";
import connect from "./connect";

const PizzaList = ({ basket, basketActions }) => {
  const classes = useStyles();
  const pizzas = useGetPizzaList();

  const updateOrder = useCallback(
    event => {
      const { order } = event.target.dataset;
      const [id, size, price, count] = order.split("/");

      basketActions.updateOrder({
        id: parseInt(id),
        size: size.toLowerCase(),
        price: parseInt(price),
        count: parseInt(count)
      });
    },
    [basketActions]
  );

  if (pizzas.length === 0) {
    return null;
  }

  return (
    <ul className={classes.container}>
      {pizzas.map(pizza => {
        return (
          <Pizza
            key={pizza.id}
            pizza={pizza}
            order={basket[pizza.id]}
            updateOrder={updateOrder}
          />
        );
      })}
    </ul>
  );
};

PizzaList.propTypes = {
  basket: PropTypes.object.isRequired,
  basketActions: PropTypes.shape({
    updateOrder: PropTypes.func.isRequired
  }).isRequired
};

export default connect(PizzaList);
