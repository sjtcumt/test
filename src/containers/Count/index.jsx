import React from "react";

import { connect } from "react-redux";

import {
  createAddAction,
  createDescAction,
  createAddAsyncAction,
} from "../../redux/actions/count";

function Count(props) {
  let selectNumber = null;

  function add() {
    const { value } = selectNumber;
    props.add(value * 1);
    //store.dispatch(createAddAction(value * 1));
  }

  //   add = () => {
  //     const { value } = this.selectNumber;
  //     store.dispatch({ type: "add", data: value * 1 });
  //   };
  function desc() {
    const { value } = selectNumber;
    props.desc(value * 1);
  }
  function addOdd() {
    const { value } = selectNumber;
    if (props.count % 2 !== 0) {
      props.add(value * 1);
    }
  }
  function addAsync() {
    const { value } = selectNumber;
    props.addAsync(value * 1, 500);
  }

  console.log(props);
  return (
    <div>
      <h1>Sum:{props.count}</h1>
      <h1>AllPerson:{props.renshu}</h1>
      <select
        ref={(c) => {
          selectNumber = c;
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={add}>+</button>
      <button onClick={desc}>-</button>
      <button onClick={addOdd}>add odd</button>
      <button onClick={addAsync}>add sync</button>
    </div>
  );
}

//#region
// import React, { useState } from "react";

// export default function Count() {
//   const [count] = useState(0);
//   function add() {}
//   function desc() {}
//   function addOdd() {}
//   function addSync() {}
//   return (
//     <div>
//       <h1>Sum:{count}</h1>
//       <select>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//       </select>
//       <button onClick={add}>+</button>
//       <button onClick={desc}>-</button>
//       <button onClick={addOdd}>add odd</button>
//       <button onClick={addSync}>add sync</button>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return { count: state };
// }
// const mapStateToProps = (state) => ({ count: state });

// const mapDispatchToProps = (dispatch) => ({
//   add: (number) => dispatch(createAddAction(number)),
//   desc: (number) => dispatch(createDescAction(number)),
//   addAsync: (number, time) => dispatch(createAddAsyncAction(number, time)),
// });
//#endregion

export default connect(
  (state) => ({ count: state.he, renshu: state.rens.length }),
  // (dispatch) => ({
  //   add: (number) => dispatch(createAddAction(number)),
  //   desc: (number) => dispatch(createDescAction(number)),
  //   addAsync: (number, time) => dispatch(createAddAsyncAction(number, time)),
  // })
  {
    add: createAddAction,
    desc: createDescAction,
    addAsync: createAddAsyncAction,
  }
)(Count);
