import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "../styles/NatificationsPost.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";

function NatificationsPost({ user, reply, like, currentUser }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar style={{ fontSize: "30px !important" }} />
      </div>
      <div className="post__body">
        <Link style={{ textDecoration: "none", color: "black" }}>
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                John Doe
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />@ daddy
                </span>
              </h3>
            </div>
            <div className="post__video"></div>
            <div className="post__headerDescription">
              <p className="display_name">{user} </p> <p> </p>
              {reply && <p className="post_Action"> replying to</p>}
              {reply && <p className="currentUser_name"> {currentUser}</p>}
              {like && <p className="post_Action"> liked your reply</p>}
            </div>
          </div>
        </Link>
        <div className="post__footer">
          {reply && (
            <ChatBubbleOutlineIcon
              className="footer__iconComment footer__icon"
              fontSize="small"
            />
          )}

          {reply && (
            <RepeatIcon
              className="footer__iconRetweet footer__icon"
              fontSize="small"
            />
          )}
          {reply && (
            <FavoriteBorderIcon
              className="footer__iconLike footer__icon"
              fontSize="small"
            />
          )}
          {reply && (
            <PublishIcon
              className="footer__iconShare footer__icon"
              fontSize="small"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NatificationsPost;
