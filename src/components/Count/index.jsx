import React, { Component } from "react";

import store from "../../redux/store";
import { createAddAction, createDescAction } from "../../redux/count_action";

export default class Count extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  add = () => {
    const { value } = this.selectNumber;
    store.dispatch(createAddAction(value * 1));
  };

  //   add = () => {
  //     const { value } = this.selectNumber;
  //     store.dispatch({ type: "add", data: value * 1 });
  //   };
  desc = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDescAction(value * 1));
  };
  addOdd = () => {
    const { value } = this.selectNumber;
    if (store.getState() % 2 !== 0) {
      store.dispatch(createAddAction(value * 1));
    }
  };
  addSync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createAddAction(value * 1));
    }, 500);
  };

  render() {
    return (
      <div>
        <h1>Sum:{store.getState()}</h1>
        <select
          ref={(c) => {
            this.selectNumber = c;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.desc}>-</button>
        <button onClick={this.addOdd}>add odd</button>
        <button onClick={this.addSync}>add sync</button>
      </div>
    );
  }
}

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
