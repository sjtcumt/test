import React from "react";

import { connect } from "react-redux";

function Amount(props) {
  return <div>Money Amount:{props.amount}</div>;
}

export default connect(
  (state) => ({
    amount: state.amount,
  }),
  {}
)(Amount);
