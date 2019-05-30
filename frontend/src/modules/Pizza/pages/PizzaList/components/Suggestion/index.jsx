import React from "react";
import PropTypes from "prop-types";

import formatPrice from "~/services/formatPrice";

import useStyles from "./styles";

const Suggestion = ({ title, pizzaId, price, weight, order, updateOrder }) => {
  const classes = useStyles();
  const isExistOrder = Boolean(order);

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.mainBlock}>
        <span className={classes.price}>{formatPrice(price)}</span>
        {!isExistOrder && (
          <button
            className={classes.buy}
            onClick={updateOrder}
            data-order={`${pizzaId}/${title}/${price}/1`}
          >
            Buy
          </button>
        )}
        {isExistOrder && (
          <div className={classes.counterContainer}>
            <button
              className={classes.icon}
              disabled={order.count <= 0}
              onClick={updateOrder}
              data-order={`${pizzaId}/${title}/${price}/${order.count - 1}`}
            >
              <span className={classes.sign}>&#8722;</span>
            </button>
            <span className={classes.count}>{order.count}</span>
            <button
              className={classes.icon}
              disabled={order.count > 9}
              onClick={updateOrder}
              data-order={`${pizzaId}/${title}/${price}/${order.count + 1}`}
            >
              <span className={classes.sign}>&#43;</span>
            </button>
          </div>
        )}
      </div>
      <div className={classes.weight}>{weight}</div>
    </div>
  );
};

Suggestion.propTypes = {
  title: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  order: PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  })
};

export default React.memo(Suggestion);
