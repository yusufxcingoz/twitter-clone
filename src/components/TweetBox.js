import React, { useState } from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [posts, setPosts] = useState([]);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "yusuf",
      username: "daddy",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1355074377797267456/OmSXuU7U_400x400.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://pbs.twimg.com/profile_images/1355074377797267456/OmSXuU7U_400x400.jpg"
            style={{ fontSize: "24px" }}
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
