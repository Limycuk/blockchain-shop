import React from "react";
import PropTypes from "prop-types";

import { AsyncImage } from "~/packages/UIKit";

import Suggestion from "../Suggestion";
import useStyles from "./styles";

const Pizza = ({ pizza, order, updateOrder }) => {
  const classes = useStyles();

  return (
    <li className={classes.container}>
      <div className={classes.image}>
        <AsyncImage src={pizza.photo_small} alt={pizza.title} />
      </div>
      {Boolean(pizza.is_big) && (
        <Suggestion
          title="Big"
          weight="0.8 - 0.9 kg"
          pizzaId={pizza.id}
          price={pizza.big_price}
          order={order && order.big}
          updateOrder={updateOrder}
        />
      )}
      {Boolean(pizza.is_medium) && (
        <Suggestion
          title="Standart"
          weight="0.6 - 0.7 kg"
          pizzaId={pizza.id}
          price={pizza.medium_price}
          order={order && order.standart}
          updateOrder={updateOrder}
        />
      )}
      {Boolean(pizza.is_thin) && (
        <Suggestion
          title="Thin"
          weight="0.5 - 0.6 kg"
          pizzaId={pizza.id}
          price={pizza.thin_price}
          order={order && order.thin}
          updateOrder={updateOrder}
        />
      )}
    </li>
  );
};

Pizza.propTypes = {
  pizza: PropTypes.shape({
    photo_small: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    is_big: PropTypes.number.isRequired,
    big_price: PropTypes.number
  }).isRequired,
  order: PropTypes.shape({
    big: PropTypes.object,
    standart: PropTypes.object,
    thin: PropTypes.object
  })
};

export default React.memo(Pizza);
