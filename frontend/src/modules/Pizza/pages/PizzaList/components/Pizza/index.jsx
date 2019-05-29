import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import { AsyncImage } from "~/packages/UIKit";

import Suggestion from "../Suggestion";
import styles from "./styles";

const Pizza = ({ classes, pizza }) => {
  return (
    <li className={classes.container}>
      <div className={classes.image}>
        <AsyncImage src={pizza.photo_small} alt={pizza.title} />
      </div>
      {Boolean(pizza.is_big) && (
        <Suggestion title="Big" weight="0.8 - 0.9 kg" price={pizza.big_price} />
      )}
      {Boolean(pizza.is_medium) && (
        <Suggestion
          title="Standart"
          weight="0.6 - 0.7 kg"
          price={pizza.medium_price}
        />
      )}
      {Boolean(pizza.is_thin) && (
        <Suggestion
          title="Thin"
          weight="0.5 - 0.6 kg"
          price={pizza.thin_price}
        />
      )}
    </li>
  );
};

Pizza.propTypes = {
  classes: PropTypes.object.isRequired,
  pizza: PropTypes.shape({
    photo_small: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    is_big: PropTypes.number.isRequired,
    big_price: PropTypes.number
  }).isRequired
};

export default withStyles(styles)(Pizza);
