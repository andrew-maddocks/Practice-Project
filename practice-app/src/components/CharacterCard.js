import React from "react";

const CharacterCard = props => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1 style={{ display: props.house ? "" : "none" }}>
        House: {props.house}
      </h1>
      <h1 style={{ display: props.core ? "" : "none" }}>Wand: {props.core}</h1>
      <h1 style={{ display: props.patronus ? "" : "none" }}>
        Patronus: {props.patronus}
      </h1>
      <img src={props.image} alt="character" />
    </div>
  );
};

export default CharacterCard;
