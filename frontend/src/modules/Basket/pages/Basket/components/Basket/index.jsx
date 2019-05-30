import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import formatPrice from "~/services/formatPrice";

import connect from "./connect";
import useStyles from "./styles";

const Basket = ({ totalPrice, isEmptyBasket }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {isEmptyBasket && (
        <p className={classes.hint}>
          Your basket is empty. Choose any <Link to="/">pizza</Link>
        </p>
      )}
      {!isEmptyBasket && (
        <p className={classes.totalPrice}>
          Total Price: <b>{formatPrice(totalPrice)}</b>
        </p>
      )}
    </div>
  );
};

Basket.propTypes = {
  totalPrice: PropTypes.number.isRequired
};

export default connect(Basket);
