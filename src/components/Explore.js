import React from "react";
import "../styles/Explore.css";
import SearchIcon from "@material-ui/icons/Search";
import PhotoSlide from "./PhotoSlide";

function Explore() {
  return (
    <div className="explore">
      <div className="input_background">
        <div className="explore__input">
          <SearchIcon />
          <input placeholder="Search Twitter" type="text" />
        </div>
      </div>
      <PhotoSlide />
    </div>
  );
}

export default Explore;
