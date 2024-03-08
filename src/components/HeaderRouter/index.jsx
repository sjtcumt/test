import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderRouter() {
  const navigate = useNavigate();
  function back() {
    navigate(-1);
  }
  function forward() {
    navigate(1);
  }
  return (
    <div>
      <button onClick={back}>&lt;back</button>
      <button onClick={forward}>forward&gt;</button>
    </div>
  );
}
