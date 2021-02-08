import React from "react";
import "../styles/SidebarOption.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function SidebarOption({ active, text, Icon }) {
  return (
    <Link
      className="sidebarOption-link"
      style={{ color: "black", textDecoration: "none" }}
      to={text.toLowerCase()}
    >
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon className="sidebar_Icon" />
        <h2>{text}</h2>
      </div>
    </Link>
  );
}

export default SidebarOption;
