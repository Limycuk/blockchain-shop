import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as basketActions from "~/modules/Basket/actions";
import * as basketSelectors from "~/modules/Basket/selectors";

const mapStateToProps = state => {
  return {
    basket: basketSelectors.getBasket(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    basketActions: bindActionCreators(basketActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
