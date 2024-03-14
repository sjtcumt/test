import { Navigate } from "react-router-dom";

import SearchGithubUsers from "../components/Main/SearchGithubUsers";
import MagicPuzzel from "../components/Main/MagicPuzzel";
import MoneyRecord from "../components/Main/MoneyRecord";
import Blog from "../components/Blog";
import GreedySnake from "../components/Main/GreedySnake";

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
    path: "greedy_snake",
    element: <GreedySnake />,
  },
  {
    path: "blog/:fileName",
    element: <Blog />,
  },
  { path: "*", element: <Navigate to="magic_puzzel" /> },
];
