import { Navigate } from "react-router-dom";

import SearchGithubUsers from "../components/Main/SearchGithubUsers";
import MagicPuzzel from "../components/Main/MagicPuzzel";
import MoneyRecord from "../components/Main/MoneyRecord";
import Blog from "../components/Blog";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: "search_github_users",
    element: <SearchGithubUsers />,
  },
  {
    path: "magic_puzzel",
    element: <MagicPuzzel />,
  },
  {
    path: "monery_record",
    element: <MoneyRecord />,
  },
  {
    path: "blog/:fileName",
    element: <Blog />,
  },
  { path: "*", element: <Navigate to="magic_puzzel" /> },
];
