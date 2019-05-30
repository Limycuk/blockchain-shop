import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as pizzaActions from "~/modules/Pizza/actions";
import * as pizzaSelectors from "~/modules/Pizza/selectors";

const mapStateToProps = state => {
  return {
    basket: pizzaSelectors.getBasket(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    pizzaActions: bindActionCreators(pizzaActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
