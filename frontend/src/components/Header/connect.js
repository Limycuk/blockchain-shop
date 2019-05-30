import { connect } from "react-redux";

import * as pizzaSelectors from "~/modules/Pizza/selectors";

const mapStateToProps = state => {
  return {
    pizzasCounter: pizzaSelectors.getPizzasCount(state)
  };
};

export default connect(mapStateToProps);
