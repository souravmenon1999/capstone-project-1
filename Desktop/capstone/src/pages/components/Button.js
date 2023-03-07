import React from "react";
import { Link } from "react-router-dom";

import "./components.css";
export default function Button(props) {
  const onClick = (e) => {
    props.onclick(e);
  };
  const onSignUp = (e) => {
    return props.signuphandler();
  };

  

  if (props.name === "LOGIN") {
    return <button className="btn login">{props.name}</button>;
  } else if (props.name === "Next Page") {
    return (
      <>
      <Link to="/homepage">
      <button onClick={onSignUp} className="btn next-page">
        {props.name}
      </button>
      </Link>
      </>
    );
  } else {
    if (props.checkUnlock()) {
      // console.log(props.checkUnlock());
      return (
        <>
          <Link to="/category-page">
            <button onClick={onClick} className="btn signup">
              {props.name}
            </button>
          </Link>
        </>
      );
    } else {
      return (
        <button onClick={onClick} className="btn signup">
          {props.name}
        </button>
      );
    }
  }
}
