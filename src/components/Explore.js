import React from "react";
import "../styles/Explore.css";
import SearchIcon from "@material-ui/icons/Search";
import PhotoSlide from "./PhotoSlide";
import TrendComponent from "./TrendsComponent";
import ReadMore from "./ReadMore";
import Situations from "./Situations";
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
      <h1>Trend Topics</h1>
      <TrendComponent location="Germany" topic="#Bitcoin" tweetNumber="123" />

      <ReadMore />

      <div className="whats_hapening">
        <h1>Whats Happening?</h1>
      </div>
      <Situations
        tweetOwner="Los Angales Times"
        timePast="5 saat önce"
        tweet="A Black reporter’s trip to inauguration & a search for America's soul"
        imgURL="https://pbs.twimg.com/media/EtpI_AcVcAEKx6K?format=jpg&name=900x900"
      />
      <Situations
        tweetOwner="Bloomerang Green"
        timePast="3 saat önce"
        tweet="Here is why carbon captures matters."
        imgURL="https://pbs.twimg.com/media/Ett1V9pWgAUJjQw?format=jpg&name=900x900"
      />
      <Situations
        tweetOwner="Bloomerang Green"
        timePast="3 saat önce"
        tweet="Here is why carbon captures matters."
        imgURL="https://pbs.twimg.com/media/Ett1V9pWgAUJjQw?format=jpg&name=900x900"
      />
      <ReadMore />
    </div>
  );
}

export default Explore;
