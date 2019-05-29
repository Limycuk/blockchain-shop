import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import formatPrice from "~/services/formatPrice";

import styles from "./styles";

const Suggestion = ({ classes, title, price, weight }) => {
  const [count, setCount] = useState(null);

  const toggleBuy = () => {
    setCount(1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={classes.mainBlock}>
        <span className={classes.price}>{formatPrice(price)}</span>
        {count === null && (
          <button className={classes.buy} onClick={toggleBuy}>
            Buy
          </button>
        )}
        {Number.isInteger(count) && (
          <div className={classes.counterContainer}>
            <button
              className={classes.icon}
              disabled={count <= 0}
              onClick={decreaseCount}
            >
              <span className={classes.sign}>&#8722;</span>
            </button>
            <span className={classes.count}>{count}</span>
            <button
              className={classes.icon}
              disabled={count > 9}
              onClick={increaseCount}
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
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired
};

export default withStyles(styles)(Suggestion);
