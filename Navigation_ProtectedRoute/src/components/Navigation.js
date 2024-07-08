import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul style={{ display: "flex", margin: "10px ", padding: "10px", justifyContent: "space-around", alignContent: "center" }}>

        <li style={{ listStyle: "none" }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ listStyle: "none", gap: "3" }}>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/about" state={{ myKey: "import data", luckyNumber: 56 }}>
            About
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/user/:userID"></Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/Error"></Link>
        </li>
        <li style={{ listStyle: "none" }}>
          <Link to="/prime">
            Preminum Protected Route
          </Link>
        </li>
      </ul >
    </nav >
  );
}

export default Navigation;
