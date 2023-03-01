import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import NumberBaseball from "../3.숫자야구/NumberBaseball-class";
import RSP from "../5.가위바위보/RSP-class";
import Lotto from "../6.로또/Lotto-class";

const GameMatcher = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let urlSearchParams = new URLSearchParams(location.search.slice(1));

  return (
    <Routes>
      <Route path="number-baseball" element={<NumberBaseball />} />
      <Route path="rsp" element={<RSP />} />
      <Route path="lotto" element={<Lotto />} />
      <Route path="*" element={<div>일치하는 게임이 없습니다.</div>} />
    </Routes>
  );
};

export default GameMatcher;
