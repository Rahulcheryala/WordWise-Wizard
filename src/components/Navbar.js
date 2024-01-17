import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} position position-fixed w-100 top-0  border-bottom border-primary`}
        data-bs-theme={`${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse w-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.navItem1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Support Us
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      HTML
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      CSS
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Others
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          {/* <div className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div> */}
          <div className="form-check form-switch form-check-reverse">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              onClick={props.toggleMode}
              title="Toggle light/dark mode"
            />
            <label
              className={`form-check-label ms-2 text-${
                props.mode === "white" ? "dark" : "white"
              }`}
              htmlFor="flexSwitchCheckReverse"
            >
              {props.mode === "dark" ? "Light" : "Dark"} mode
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

// PROP TYPES
Navbar.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired,
  // This makes the title to be given as a prop else it will be showing error
  Home: PropTypes.string,
};

// DEFAULT PROPS
Navbar.defaultProps = {
  tile: "RahuL._.1973",
  Home: "Your Learnings !",
};
