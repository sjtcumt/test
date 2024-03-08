import React from "react";

import { useSearchParams, useLocation } from "react-router-dom";

const DetailData = [
  { id: "01", content: "content01" },
  { id: "02", content: "content02" },
  { id: "03", content: "content03" },
];

export default function Detail02() {
  const a = useLocation();
  console.log(a);

  const { id, title } = a.state;
  const findResult = DetailData.find((obj) => {
    return obj.id === id;
  });
  return (
    <ul>
      <li>Id:{id}</li>
      <li>title:{title}</li>
      <li>content:{findResult?.content}</li>
    </ul>
  );

  // const [search, setSearch] = useSearchParams();

  // const findResult = DetailData.find((obj) => {
  //   return obj.id === search.get("id");
  // });
  // return (
  //   <ul>
  //     <li>Id:{search.get("id")}</li>
  //     <li>title:{search.get("title")}</li>
  //     <li>content:{findResult?.content}</li>
  //   </ul>
  // );
}
