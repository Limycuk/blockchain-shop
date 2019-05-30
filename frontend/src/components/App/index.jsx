import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/styles";

import Router from "../Router";
import theme from "./theme";
import createStore from "../../services/createStore";
import Web3Provider from "../Web3Provider";

const { store } = createStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Web3Provider>
          <Router />
        </Web3Provider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
