import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("white");
  const [alertMsg, setAlertMsg] = useState(null);

  const showAlertMessage = (message, type) => {
    setAlertMsg({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlertMsg(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("white");
      document.body.style.backgroundColor = "white";
      showAlertMessage("Light mode enabled !!!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(90,95,105)";
      showAlertMessage("Dark mode enabled !!!", "success");
    }
  };
  return (
    <>
      <Navbar
        title="RahuL._.1973"
        navItem1="Learn!"
        mode={mode}
        toggleMode={toggleMode}
      />
      <br />
      <br />
      <Alert message={alertMsg} />
      <div className="container-fluid my-5 p-0 mb-0 w-100">
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
        <Textarea mode={mode} showAlertMessage={showAlertMessage} />
        {/* </Route>
        </Switch> */}
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
