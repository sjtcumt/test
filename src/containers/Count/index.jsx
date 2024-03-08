import CountUI from "../../components/Count";
import {
  createAddAction,
  createDescAction,
  createAddAsyncAction,
} from "../../redux/count_action";

import { connect } from "react-redux";

function mapStateToProps(state) {
  return { count: state };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (number) => dispatch(createAddAction(number)),
    desc: (number) => dispatch(createDescAction(number)),
    addAsync: (number, time) => dispatch(createAddAsyncAction(number, time)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
