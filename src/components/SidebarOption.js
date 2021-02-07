import React from "react";
import "../styles/SidebarOption.css";
import { Link } from "react-router-dom";

function SidebarOption({ active, text, Icon }) {
  return (
    <Link
      style={{ color: "black", textDecoration: "none" }}
      to={text.toLowerCase()}
    >
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon style={{ fontSize: "30px" }} />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

export default SidebarOption;
