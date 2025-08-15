import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TextForm(props) {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const [btnText, setButtonText] = useState("Enable Dark Mode");
  const toggleButtonText = () => {
    if (btnText === "Enable Dark Mode") {
      setButtonText("Enable Light Mode");
    } else {
      setButtonText("Enable Dark Mode");
    }
  };
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="lblHEading" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toggleButtonText}>
          {btnText}
        </button>
        <button className="btn btn-primary" onClick={() => navigate("/about")}>
          Go to About
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words | {text.length} characters |{" "}
          {text.split(".").length} sentence
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
