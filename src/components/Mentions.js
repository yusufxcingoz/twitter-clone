import React from "react";
import Header from "./Header";
import NatificationsHeader from "./NatificationsHeader";
import "../styles/Natifications.css";
import NatificationsPost from "./NatificationsPost";

function Mentions() {
  return (
    <div className="natifications">
      <Header text="Natifications" />
      <NatificationsHeader />
      <NatificationsPost reply currentUser="@daddy" user="john" />
      <NatificationsPost user="john" />
      <NatificationsPost user="john" />
      <NatificationsPost user="john" />
      <NatificationsPost user="john" />
      <NatificationsPost user="john" />
      <NatificationsPost user="john" />
    </div>
  );
}

export default Mentions;
