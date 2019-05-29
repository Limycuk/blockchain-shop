import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import useGetPizzaList from "../../hooks/useGetPizzaList";
import Pizza from "../Pizza";

const PizzaList = ({ classes }) => {
  const pizzas = useGetPizzaList();

  if (pizzas.length === 0) {
    return null;
  }

  return (
    <ul className={classes.container}>
      {pizzas.map(pizza => {
        return <Pizza key={pizza.id} pizza={pizza} />;
      })}
    </ul>
  );
};

PizzaList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PizzaList);
