import React from "react";
import "../styles/SidebarOption.css";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";

function SidebarOption({ active, text, Icon }) {
  return (
    <NavLink
      className="sidebarOption-link"
      style={{ color: "black", textDecoration: "none" }}
      activeClassName="active_link"
      to={text.toLowerCase()}
    >
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon className="sidebar_Icon" />
        <h2>{text}</h2>
      </div>
    </NavLink>
  );
}

export default SidebarOption;
