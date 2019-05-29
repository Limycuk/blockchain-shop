import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import PizzaList from "~/modules/Pizza/pages/PizzaList";

import styles from "./styles";

const Router = ({ classes }) => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PizzaList} />
      </div>
    </BrowserRouter>
  );
};

Router.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Router);
