import React from "react";
import "./NavBar.css";

import logo1 from "./assets/logo1.png";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
        <img className="img-fluid" src={logo1} alt="Logo" />
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}
