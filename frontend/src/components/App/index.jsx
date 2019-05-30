import React from "react";
import { Provider } from "react-redux";

import { ThemeProvider } from "@material-ui/styles";

import Router from "../Router";
import theme from "./theme";
import createStore from "../../services/createStore";

const { store } = createStore();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
