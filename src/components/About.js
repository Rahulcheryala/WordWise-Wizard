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
        } w-75`}
        style={myStyle}
      >
        <nav className="navbar ms-3">
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
          <h4>Team</h4>
          <p>
            Bootstrap is maintained by a small team of developers on GitHub.
            We're actively looking to grow this team and would love to hear from
            you if you're excited about CSS at scale, writing and maintaining
            vanilla JavaScript plugins, and improving build tooling processes
            for frontend code.
          </p>
          <h4>History</h4>
          <p>
            Bootstrap was created at Twitter in mid-2010 by @mdo and @fat. Prior
            to being an open-sourced framework, Bootstrap was known as Twitter
            Blueprint. A few months into development, Twitter held its first
            Hack Week and the project exploded as developers of all skill levels
            jumped in without any external guidance. It served as the style
            guide for internal tools development at the company for over a year
            before its public release, and continues to do so today. <br />
            Originally released on Friday, August 19, 2011, we've since had over
            twenty releases, including two major rewrites with v2 and v3. With
            Bootstrap 2, we added responsive functionality to the entire
            framework as an optional stylesheet. Building on that with Bootstrap
            3, we rewrote the library once more to make it responsive by default
            with a mobile first approach.
          </p>
          <h4>Logo</h4>
          <p>
            When referencing Bootstrap, use our logo mark. Do not modify our
            logos in any way. Do not use Bootstrap's branding for your own open
            or closed source projects.
          </p>
          <h4>License</h4>
          <p>
            <b>It permits you to: </b>
            Freely download and use Bootstrap, in whole or in part, for
            personal, private, company internal, or commercial purposes Use
            Bootstrap in packages or distributions that you create Modify the
            source code Grant a sublicense to modify and distribute Bootstrap to
            third parties not included in the license
          </p>
        </div>
      </div>
    </>
  );
}
