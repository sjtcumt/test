import { Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Message from "../pages/Home/Message";
import Detail from "../pages/Home/Message/Detail";
import Detail02 from "../pages/Home/Message/Detail02";
import Detail03 from "../pages/Home/Message/Detail03";
import News from "../pages/Home/News";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "message",
        element: <Message />,
        children: [
          {
            path: "detail/:id/:title",
            element: <Detail />,
          },
          {
            path: "detail02",
            element: <Detail02 />,
          },
          {
            path: "detail03",
            element: <Detail03 />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  { path: "/", element: <Navigate to={<Home />} /> },
];
