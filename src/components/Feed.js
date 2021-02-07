import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/Feed.css";

function Feed() {
  return (
    <Router>
      <div className="feed">
        <h1>Main Feed.</h1>
      </div>
    </Router>
  );
}

export default Feed;
