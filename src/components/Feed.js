import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../styles/Feed.css";

function Feed() {
  return (
    <Router>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <TweetBox />
        <Post />
      </div>
    </Router>
  );
}

export default Feed;
