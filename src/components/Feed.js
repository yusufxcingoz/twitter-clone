import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "../styles/Feed.css";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <Router>
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <TweetBox />
        {posts.map((posts) => (
          <Post
            avatar={posts.avatar}
            name={posts.name}
            verified={posts.verified}
            username={posts.username}
            text={posts.text}
          />
        ))}
      </div>
    </Router>
  );
}

export default Feed;
