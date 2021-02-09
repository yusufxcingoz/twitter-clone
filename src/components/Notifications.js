import React from "react";
import Header from "./Header";
import NatificationsHeader from "./NatificationsHeader";
import "../styles/Natifications.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NatificationsPost from "./NatificationsPost";

function Notifications() {
  return (
    <div className="natifications">
      <Header className="header" text="Natifications" />
      <NatificationsHeader />
      <NatificationsPost like user="Elon Musk" />
      <NatificationsPost like user="Elon Musk" />
      <NatificationsPost reply currentUser="@daddy" user="John Doe" />
      <NatificationsPost like user="XASD " />
      <NatificationsPost like user="Elon Musk" />
      <NatificationsPost like user="Elon Musk" />
    </div>
  );
}

export default Notifications;
