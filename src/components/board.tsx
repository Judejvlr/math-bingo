import React from "react";
import BingoCard from "./bingoCard";
import Display from "./Display";


export default function Board() {

  return (
    <React.Fragment>
      <Display />
      <BingoCard />
    </React.Fragment>
  )
}