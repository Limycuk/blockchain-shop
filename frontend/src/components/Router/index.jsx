import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PizzaList from "~/modules/Pizza/pages/PizzaList";
import Basket from "~/modules/Basket/pages/Basket";

import Header from "../Header";
import useStyles from "./styles";

const Router = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Header />
        <Route path="/" exact component={PizzaList} />
        <Route path="/basket" exact component={Basket} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
