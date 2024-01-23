import React, { useState } from "react";
import "./About.css";

let boolLightMode = true;
export default function About() {
  let lightModeStyle = {
    color: "black",
    backgroundColor: "rgb(248,249,250)",
    borderRadius: "10px",
  };
  let darkModeStyle = {
    color: "white",
    backgroundColor: "rgb(43,46,50)",
    borderRadius: "10px",
  };

  const [myStyle, setMyStyle] = useState(lightModeStyle);
  const [mode, setMode] = useState("Dark");

  const toggleMode = () => {
    const newStyle = boolLightMode ? darkModeStyle : lightModeStyle;
    setMyStyle(newStyle);
    setMode(boolLightMode ? "Light" : "Dark");
    boolLightMode = !boolLightMode;
  };
  return (
    <>
      <div
        className={`container ${
          mode === "Dark" ? "dark-mode" : "light-mode"
        } w-75 border border-light`}
        style={myStyle}
      >
        <nav className="navbar ms-3" style={{ zIndex: 0 }}>
          <h1>About</h1>
          <button
            className="button btn-light border border-2  my-4 ms-3 px-4 py-2"
            onClick={toggleMode}
            style={myStyle}
          >
            Enable {mode} Mode
          </button>
        </nav>
        <div className="container p-3 mb-5 ">
          <h4>Accurate Analysis</h4>
          <p>
            Our Text Counter employs advanced algorithms to provide accurate and
            insightful analysis of your text. From word count and character
            count to readability scores, we cover it all.
          </p>
          <h4>Free to Use</h4>
          <p>
            Yes, you read it right! [Your Website Name] is committed to making
            text analysis accessible to everyone. Enjoy the benefits of our Text
            Counter without any cost. No hidden fees, no subscriptions - just
            pure, free analysis.
          </p>
          <h4>User-Friendly Interface</h4>
          <p>
            We believe in simplicity. Our intuitive interface ensures that you
            can effortlessly navigate through the platform, making text analysis
            a breeze for users of all levels.
          </p>
          <h4>Instant Results</h4>
          <p>
            Time is valuable. Our platform delivers near-instant results,
            allowing you to make quick decisions based on the analysis. No
            waiting around - get the information you need when you need it.
          </p>
        </div>
      </div>
    </>
  );
}
