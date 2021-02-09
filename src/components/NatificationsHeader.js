import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NatificationsHeader.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function NatificationsHeader() {
  return (
    <div className="header">
      <NavLink
        className="nav_link"
        activeClassName="active_link"
        to="notifications"
      >
        All
      </NavLink>
      <NavLink
        className="nav_link"
        activeClassName="active_link"
        exact
        to="mentions"
      >
        Mentions
      </NavLink>
    </div>
  );
}

export default NatificationsHeader;
