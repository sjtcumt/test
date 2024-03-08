import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppCount from "./AppCount";

import store from "./redux/store";

// import AppRouter from "./AppRouter";
// import AppSearch from "./AppSearch";
const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppCount />
      {/* <AppSearch /> */}
    </BrowserRouter>
  </React.StrictMode>
);
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AppCount />
        {/* <AppSearch /> */}
      </BrowserRouter>
    </React.StrictMode>
  );
});
