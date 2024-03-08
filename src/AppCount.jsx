import React from "react";

import Count from "./containers/Count";
import Person from "./containers/Person";

export default function AppCount() {
  return (
    <div>
      <Count />
      <hr />
      <Person />
    </div>
  );
}
