import React, { Component } from "react";
import { Card } from "../card/card";

import "./card-list.styles.css";

export const CardList = props => {
  console.log(props);
  return (
    <div className="card-list">
      {props.heros.map(hero => (
        <Card key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
