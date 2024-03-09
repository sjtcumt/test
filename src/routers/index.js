import { Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Message from "../pages/Home/Message";
import Detail from "../pages/Home/Message/Detail";
import Detail02 from "../pages/Home/Message/Detail02";
import Detail03 from "../pages/Home/Message/Detail03";

import SearchGithubUsers from "../components/Main/SearchGithubUsers";
import MagicPuzzel from "../components/Main/MagicPuzzel";

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
    ],
  },

  {
    path: "search_github_users",
    element: <SearchGithubUsers />,
  },
  {
    path: "magic_puzzel",
    element: <MagicPuzzel />,
  },
  { path: "*", element: <Navigate to="search_github_users" /> },
];
