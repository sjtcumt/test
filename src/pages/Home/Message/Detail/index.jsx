import React from "react";

import {
  useMatch,
  useNavigationType,
  useParams,
  useResolvedPath,
} from "react-router-dom";

const DetailData = [
  { id: "01", content: "content01" },
  { id: "02", content: "content02" },
  { id: "03", content: "content03" },
];

export default function Detail() {
  const { id, title } = useParams();
  // const x = useMatch("/home/message/detail/:id/:title/");
  // console.log(x);

  const findResult = DetailData.find((obj) => {
    return obj.id === id;
  });
  // console.log(useNavigationType());
  // console.log(useResolvedPath("/user?id=000#hhhs"));
  return (
    <ul>
      <li>Id:{id}</li>
      <li>title:{title}</li>
      <li>content:{findResult?.content}</li>
    </ul>
  );
}
