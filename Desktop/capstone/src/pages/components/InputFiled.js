/* eslint-disable no-unused-vars */
import React from "react";
import "./components.css";
import validator from "validator";
export default function InputField(props) {
  // eslint-disable-next-line no-useless-escape
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const onChange = (e) => {
    props.changeFunction(e, props.placeholder);
    if (props.type === "checkbox") {
      props.changeFunction(e.target.checked, props.type);
    }
  };
  const placeholder = props.placeholder;
  const len = props.data[placeholder].length;
  if (props.type === "checkbox") {
    if (props.data["checkbox"] === false) {
      return (
        <div className="flex-column">
          <div className="flex-row">
            <input type="checkbox" id="check" name="check" onClick={onChange} />
            <label>Share my registration data with Superapp</label>
          </div>
          <p className="err-msg">You need to Check this checkbox ✅</p>
        </div>
      );
    } else {
      return (
        <div className="flex-column">
          <div className="flex-row">
            <input type="checkbox" id="check" name="check" onClick={onChange} />
            <label>Share my registration data with Superapp</label>
          </div>
          <p className="err-msg black-text ">‎</p>
          {/* <p className="err-msg">You need to Check this checkbox</p> */}
        </div>
      );
    }
  }

  if (
    placeholder === "Email" &&
    !validator.isEmail(props.data.Email) &&
    len > 0
  ) {
    return (
      <>
        <div className="txtfield">
          <input
            type="email"
            onChange={onChange}
            placeholder={props.placeholder}
          />
          <p className="err-msg">Invalid Email address ✉</p>
        </div>
      </>
    );
  }
  if (placeholder === "Mobile" && re.test(props.data.Mobile) === false) {
    console.log(re.test(props.data.Mobile));
    console.log(props.data.Mobile);
    return (
      <>
        <div className="txtfield">
          <input
            type="mobile"
            onChange={onChange}
            placeholder={props.placeholder}
          />
          <p className="err-msg">Invalid Mobile Number 📱</p>
        </div>
      </>
    );
  } else {
    if (props.data[placeholder].length === 0) {
      return (
        <>
          <div className="txtfield">
            <input
              type="text"
              onChange={onChange}
              placeholder={props.placeholder}
            />
            <p className="err-msg ">{props.placeholder} can't be empty 😭</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="txtfield">
            <input
              type="text"
              onChange={onChange}
              placeholder={props.placeholder}
            />
            <p className="err-msg black-text ">‎ </p>
          </div>
        </>
      );
    }
  }
}
