import { connect } from "react-redux";

import * as basketSelectors from "~/modules/Basket/selectors";

const mapStateToProps = state => {
  return {
    pizzasCounter: basketSelectors.getPizzasCount(state),
    totalPrice: basketSelectors.getTotalPrice(state)
  };
};

export default connect(mapStateToProps);
