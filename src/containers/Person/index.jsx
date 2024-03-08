import React from "react";

import { connect } from "react-redux";

import { nanoid } from "nanoid";

import { addPerson } from "../../redux/actions/person";

export function Person(props) {
  let nameEle = null;
  let ageEle = null;
  function addPerson() {
    const name = nameEle.value;
    const age = ageEle.value;
    const personObj = { id: nanoid(), name, age };
    props.addPerson(personObj);
    nameEle.value = "";
    ageEle.value = "";
  }
  return (
    <div>
      <h2>This is Person Coponent</h2>
      <h2>sum:{props.count}</h2>
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
      <button onClick={addPerson}>Add</button>
      <ul>
        {props.persons.map((ren) => {
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
  (state) => ({ persons: state.persons, count: state.count }),
  {
    addPerson,
  }
)(Person);
