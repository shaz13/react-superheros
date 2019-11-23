import React, { Component } from "react";
import "./card.css";
export const Card = props => (

  <div class="card">
    <div class="imgBx">
      <img src={props.hero.images.md} alt={props.hero.name} />
    </div>
    <div class="details">
      <h2>
        {props.hero.name}
        <span>Alignment : {props.hero.biography.alignment}</span>
        <span>Full Name : {props.hero.biography.fullName}</span>


      </h2>
    </div>
  </div>
);
