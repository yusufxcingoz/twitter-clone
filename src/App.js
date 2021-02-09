import React, { useState, useEffect } from "react";
import db from "./firebase";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

import Feed from "./components/Feed";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Messages from "./components/Messages";
import Bookmarks from "./components/Bookmarks";
import Lists from "./components/Lists";
import Profile from "./components/Profile";
import Widgets from "./components/Widgets";
import Mentions from "./components/Mentions";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Route exact path="/home" component={Feed} />
        <Route exact path="/" component={Feed} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/lists" component={Lists} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/mentions" component={Mentions} />
        <Widgets />
      </div>
    </Router>
  );
}

export default App;
