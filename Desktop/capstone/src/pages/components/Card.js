import React from "react";
import "./card.css";

export default function Card(props) {
  const chooseOne = (e) => {
    props.handler(props.name);
  };


  if (props.data[props.name] === false) {
    return (
      <div
        className="card flex-column "
        onClick={chooseOne}
        style={
          props.color
            ? { backgroundColor: props.color }
            : { backgroundColor: "red" }
        }
      >
        <div className="card-name">{props.name}</div>
        <div className="card-image">
          <img src={props.url} alt={props.name} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="card flex-column green-border "
        onClick={chooseOne}
        style={
          props.color
            ? { backgroundColor: props.color }
            : { backgroundColor: "red" }
        }
      >
        <div className="card-name">{props.name}</div>
        <div className="card-image">
          <img src={props.url} alt={props.name} />
        </div>
      </div>
    );
  }
}
