import React from "react";
import "../styles/Header.css";

function Header({ text, username }) {
  return (
    <div>
      <div className="header">
        <h2>{text}</h2>
        <p>{username}</p>
      </div>
    </div>
  );
}

export default Header;
