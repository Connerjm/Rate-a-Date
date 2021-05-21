import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/Nav/"

import Home from "./pages/Home"
import Results from "./pages/Results";
import SignupSignin from "./pages/SignupSignin";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/signupsignin" component={SignupSignin} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;