import React from "react";
import "../styles/TrendComponents.css";

function TrendsComponent({ location, topic, tweetNumber }) {
  return (
    <div className="trends">
      <div className="trend_topic">
        <p> At {location} Location</p>
        <h1>{topic}</h1>
        <p>{tweetNumber}K Tweet </p>
      </div>
    </div>
  );
}

export default TrendsComponent;
