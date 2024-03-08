import React from "react";

import { connect } from "react-redux";

import { nanoid } from "nanoid";

import { createAddPersonAction } from "../../redux/actions/person";

export function Person(props) {
  let nameEle = null;
  let ageEle = null;
  function AddPerson() {
    const name = nameEle.value;
    const age = ageEle.value;
    console.log(name, age);
    const personObj = { id: nanoid(), name, age };
    props.AddPerson(personObj);
    nameEle.value = "";
    ageEle.value = "";
  }
  return (
    <div>
      <h2>This is Person Coponent</h2>
      <h2>sum:{props.sum_he}</h2>
      <input
        ref={(c) => {
          nameEle = c;
        }}
        type="text"
        placeholder="input name"
      />
      <input
        ref={(c) => {
          ageEle = c;
        }}
        type="text"
        placeholder="input age"
      />
      <button onClick={AddPerson}>Add</button>
      <ul>
        {props.yiduiren.map((ren) => {
          return (
            <li key={ren.id}>
              {ren.name}---{ren.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default connect(
  (state) => ({ yiduiren: state.rens, sum_he: state.he }),
  {
    AddPerson: createAddPersonAction,
  }
)(Person);
