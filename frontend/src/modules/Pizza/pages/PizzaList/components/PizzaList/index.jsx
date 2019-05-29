import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import useGetPizzaList from "../../hooks/useGetPizzaList";

const PizzaList = ({ classes }) => {
  const pizzas = useGetPizzaList();

  return (
    <div className={classes.container}>
      <p>test</p>
    </div>
  );
};

PizzaList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PizzaList);
