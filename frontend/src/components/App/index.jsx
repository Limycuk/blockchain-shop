import React from "react";

import { ThemeProvider } from "@material-ui/styles";

import Router from "../Router";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
