import React from "react";

import { useSearchParams } from "react-router-dom";

const DetailData = [
  { id: "01", content: "content01" },
  { id: "02", content: "content02" },
  { id: "03", content: "content03" },
];

export default function Detail03() {
  const [search, setSearch] = useSearchParams();

  const findResult = DetailData.find((obj) => {
    return obj.id === search.get("id");
  });
  return (
    <ul>
      <li>Id:{search.get("id")}</li>
      <li>title:{search.get("title")}</li>
      <li>content:{findResult?.content}</li>
    </ul>
  );
}
