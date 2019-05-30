import { connect } from "react-redux";

import * as basketSelectors from "~/modules/Basket/selectors";

const mapStateToProps = state => {
  return {
    totalPrice: basketSelectors.getTotalPrice(state),
    isEmptyBasket: basketSelectors.getIsEmptyBasket(state)
  };
};

export default connect(mapStateToProps);
