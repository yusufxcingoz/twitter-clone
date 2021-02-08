import React, { forwardRef } from "react";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Post({
  text,
  avatar,
  desc,
  username,
  name,
  postid,
  verified,
  videoURL,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} style={{ fontSize: "30px !important" }} />
      </div>
      <div className="post__body">
        <Link style={{ textDecoration: "none", color: "black" }}>
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__video"></div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
        </Link>
        <div className="post__footer">
          <ChatBubbleOutlineIcon
            className="footer__iconComment footer__icon"
            fontSize="small"
          />
          <RepeatIcon
            className="footer__iconRetweet footer__icon"
            fontSize="small"
          />
          <FavoriteBorderIcon
            className="footer__iconLike footer__icon"
            fontSize="small"
          />
          <PublishIcon
            className="footer__iconShare footer__icon"
            fontSize="small"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
