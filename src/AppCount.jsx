import React from "react";

import Count from "./containers/Count";
import store from "./redux/store";

export default function AppCount() {
  return (
    <div>
      <Count store={store} />
    </div>
  );
}
