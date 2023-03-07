/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Categorypage.css";
import Chip from "./components/Chips";
import Card from "./components/Card";
import data from "./card-data.json";
import Button from "./components/Button";

export default function CategoryPage() {
  const [sel, setSel] = useState({
    Action: false,
    Drama: false,
    Romance: false,
    Thriller: false,
    Western: false,
    Horror: false,
    Fantasy: false,
    Fiction: false,
    Music: false,
  });
  const handler = (name) => {
    if (sel[name] === true) {
      setSel({ ...sel, [name]: false });
    } else {
      setSel({ ...sel, [name]: true });
    }
  };
  const navigate = useNavigate();

  const closeChipHandler = (e) => {
    setSel({ ...sel, [e]: false });
  };
  const signuphandler = () => {
    localStorage.setItem("preferences", JSON.stringify(sel));
    navigate("/homepage");
  };
  return (
    // eslint-disable-next-line array-callback-return
    <div className="category-page flex-row">
      <div className="category-page-left flex-column">
        <p className="text-white super-app">Super App</p>
        <p className="text-white conatiner2-leftside-text roboto">
          Choose your entertainment category
        </p>
        <div className="chip-container">
          {Object.keys(sel).map((key) => {
            if (sel[key] === true)
              return <Chip handler={closeChipHandler} field={key}></Chip>;
          })}
        </div>
      </div>
      <div className="category-page-right flex-column">
        <div className="right-card-container">
          {data.map((item) => {
            return (
              <Card
                name={item.title}
                url={item.url}
                color={item.color}
                className="icard"
                handler={handler}
                data={sel}
              ></Card>
            );
          })}
        </div>
        <div className="button-right">
          <Button signuphandler={signuphandler} name="Next Page"></Button>
        </div>
      </div>
    </div>
  );
}
