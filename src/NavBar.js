import React from "react";
import "./NavBar.css";

import logo1 from "./assets/logo1.png";

export default function NavBar() {
  return (
    <div className="Navigation">
      <div>
        <img className="img-fluid" src={logo1} alt="Logo" />
      </div>
      <div>
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
  );
}
