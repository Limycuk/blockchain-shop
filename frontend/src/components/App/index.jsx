import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "@material-ui/styles";

import theme from "./theme";

const App = ({ classes }) => {
  return (
    <ThemeProvider theme={theme}>
      <p>test</p>
    </ThemeProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default App;
