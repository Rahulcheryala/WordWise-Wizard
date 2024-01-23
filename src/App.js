import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import "./App.css";

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
      document.body.style.backgroundColor = "rgb(45,45,45)";
      showAlertMessage("Dark mode enabled !!!", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="RahuL._.1973"
          navItem1="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <br />
        <Alert message={alertMsg} />
        <div className="container-fluid my-5 p-0 mb-0 w-100">
          <Routes>
            <Route
              exact
              // React uses partial matching of url's and it may cause trouble in rendering partial matched path
              // Example : /users ---> component 1
              //           /users/home ---> component 2
              //writing path = "/users/home" may lead to partial match with "/users" and component 1 is rendered onto the web-page
              // So it is always better to use exact keyword when giving a path
              path="/home"
              element={
                <Textarea mode={mode} showAlertMessage={showAlertMessage} />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
