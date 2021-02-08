import React from "react";
import "../styles/Situations.css";

function Situations({ tweetOwner, timePast, imgURL, tweet }) {
  return (
    <div className="situations">
      <div className="situations_content">
        <div className="tweet_info">
          <h1>{tweetOwner}</h1> <p> {timePast} </p>
        </div>
        <h1>{tweet}</h1>
        <div className="situations_header"></div>
      </div>
      <img alt="blaba" src={imgURL} />
    </div>
  );
}

export default Situations;
