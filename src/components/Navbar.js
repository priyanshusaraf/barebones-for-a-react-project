import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">{/* <img src="" alt="" /> */}</div>
      <div className="navbar__details">
        <ul className="navbar__items">
          <Link className="navbar__item" to="/">
            hi
          </Link>
          <Link className="navbar__item" to="/about">
            i
          </Link>
          <Link className="navbar__item" to="/">
            am
          </Link>
          <Link className="navbar__item" to="/">
            a
          </Link>
          <Link className="navbar__item" to="/">
            navbar
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
